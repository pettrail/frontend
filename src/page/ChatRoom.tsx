import { useEffect, useState } from "react";
import { getPetHistoryList } from "../services/pet/getPetHistoryList";
import { petHistoryDataListAtom } from "../atom/petHistory";
import { useRecoilState } from "recoil";
import { getPetEnded } from "../services/pet/getPetEnded";
import styled from 'styled-components';
import { postPetHistory } from "../services/pet/postPetHistory";
import { putPetHistoryWished } from "../services/pet/putPetHistoryWished";
import "../style/ChatRoom.css";
import ChatRoomHeader from "./ChatRoomHeader";

function ChatRoom() {
  const [petHistoryDataList, setPetHistoryDataList] = useRecoilState(petHistoryDataListAtom);
  const [message, setMessage] = useState<string>();
  const petId = 1;
  

  useEffect(() => {
    getPetEnded(petId).then((res)=>{
      if (!res){
        getPetHistoryList(petId)
        .then((res) => {
            console.log(res);
            setPetHistoryDataList(res)
        })
        .catch(() => {});
      }
    })
    .catch(()=>{
      
    })
  }, []);

  const onClickWish = (isWished: boolean, wishId:number) =>{
    console.log(!isWished);
    putPetHistoryWished(petId, petHistoryDataList[wishId].petHistoryId).then((res)=>{
      setPetHistoryDataList(
        (petHistoryDataList) => petHistoryDataList.map(
          (prevItem,i)=> i === wishId 
          ? { ...prevItem, wished: !isWished} 
          : prevItem
          ))
    })
    .catch(()=>{})
  }
  const onClickSend = ()=>{
    if (message !== undefined){
      setMessage("")
      postPetHistory(petId, message).then((res)=>{
        console.log(res);
        setPetHistoryDataList((prev) => [...prev, ...res]);
      })
      .catch(()=>{})
    }
  }

  const onHandleMessage = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setMessage(e.target.value);
  }

  const ChatImg = styled.img`
    border-radius: 20px;
    border: 10px solid white;
  `

  const MessageSpan = styled.span`
    min-width: 180px;
    max-width: 250px;
    border-radius: 25px 34px 0px 25px;
    background-color: #C6C9FF;
  `

  const PetMessageSpan = styled.span`
    min-width: 180px;
    max-width: 250px;
    border-radius: 18px 25px 25px 0px;
    background-color: white;
  `

  const NameDiv = styled.div`
    width: 100%;
    text-align: end;
  `

  const WishButtonDiv = styled.div`
    padding-left: 10px;
  `

  return (
    <div>
      <div>
        <ChatRoomHeader />
      </div>
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {petHistoryDataList?.map((v, i) => (
        
        <div className="chat-message">
          {v.objectType === "PERSON" ? 
            <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div><MessageSpan className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{v.content} {v.createdAt} </MessageSpan></div>
                  </div>
                  {/* <NameDiv className="w-6 h-6 rounded-full order-1">{v.name}</NameDiv> */}
              </div>
            : 
              <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">

                  <div>{v.mediaType === "IMAGE" 
                  ? 
                  <div className="flex">
                    <span><ChatImg src={v.content}/></span>
                    {v.wished === true ? 
                    <span className="relative">
                      <WishButtonDiv className="absolute top-[90%]" onClick={() => onClickWish(v.wished,i)}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" rx="5" fill="white" fill-opacity="0.8"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6487 5.8785C16.7711 5.96653 17.8249 6.45303 18.62 7.25012C19.4956 8.13117 19.9872 9.32292 19.9872 10.5651C19.9872 11.8073 19.4956 12.9991 18.62 13.8801L13.9625 18.5451C13.5724 18.929 13.0472 19.1441 12.5 19.1441C11.9528 19.1441 11.4275 18.929 11.0375 18.5451L6.37996 13.8801C5.53608 13.0421 5.04105 11.9155 4.99456 10.7271C4.94808 9.53876 5.35359 8.37692 6.12944 7.47556C6.90529 6.57421 7.99385 6.0003 9.1759 5.8694C10.358 5.73851 11.5457 6.06035 12.5 6.77012C13.4095 6.10672 14.5264 5.79047 15.6487 5.8785Z" fill="#A1A5FF"/>
                        </svg>
                      </WishButtonDiv>
                    </span>
                    :
                    <span className="relative">
                      <WishButtonDiv className="absolute top-[90%]" onClick={() => onClickWish(v.wished,i)}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" rx="5" fill="white" fill-opacity="0.8"/>
                        <rect width="25" height="25" rx="5" fill="white" fill-opacity="0.8"/>
                        <path d="M12.2016 7.17119L12.4971 7.39098L12.7946 7.17397C13.6078 6.58088 14.6062 6.29815 15.6096 6.37685C16.6128 6.45553 17.5548 6.89032 18.2656 7.6027C19.048 8.39005 19.4872 9.45498 19.4872 10.565C19.4872 11.6749 19.0481 12.7398 18.2658 13.5271C18.2656 13.5272 18.2655 13.5274 18.2653 13.5275L13.6103 18.1901C13.3139 18.481 12.9153 18.644 12.5 18.644C12.0847 18.644 11.686 18.481 11.3896 18.1901L6.7338 13.5267L6.7338 13.5267L6.73228 13.5252C5.97812 12.7763 5.53572 11.7695 5.49418 10.7075C5.45264 9.64545 5.81504 8.60714 6.50839 7.80162C7.20175 6.99611 8.17456 6.48322 9.23093 6.36624C10.2873 6.24926 11.3488 6.53689 12.2016 7.17119ZM17.916 13.1986L18.0625 13.0521V13.0143C18.6452 12.3305 18.9621 11.4565 18.9501 10.5536C18.9371 9.58177 18.5441 8.65366 17.8552 7.96808L17.8537 7.9667C17.1608 7.28255 16.2262 6.89893 15.2525 6.89893C14.2787 6.89893 13.3441 7.28255 12.6512 7.9667L12.6512 7.96668L12.6475 7.9704C12.6242 7.99383 12.5966 8.01243 12.5661 8.02512L12.7584 8.48667L12.5661 8.02512C12.5356 8.03781 12.503 8.04435 12.47 8.04435C12.437 8.04435 12.4043 8.03781 12.3738 8.02512L12.1815 8.48667L12.3738 8.02512C12.3434 8.01243 12.3157 7.99383 12.2925 7.9704L12.2925 7.97038L12.2888 7.9667C11.5958 7.28255 10.6612 6.89893 9.68746 6.89893C8.71369 6.89893 7.77912 7.28255 7.08617 7.9667L7.08612 7.96664L7.08005 7.97285C6.40046 8.66752 6.01992 9.60069 6.01992 10.5725C6.01992 11.5443 6.40046 12.4775 7.08005 13.1722L7.08004 13.1722L7.08306 13.1752L11.7397 17.8543C11.7399 17.8545 11.74 17.8547 11.7402 17.8548C11.8396 17.9551 11.9578 18.0346 12.0881 18.089C12.2186 18.1434 12.3586 18.1714 12.5 18.1714C12.6414 18.1714 12.7813 18.1434 12.9118 18.089C13.0419 18.0347 13.1599 17.9553 13.2592 17.8554C13.2595 17.855 13.2599 17.8547 13.2602 17.8543L17.916 13.1986Z" stroke="#A1A5FF"/>
                        </svg>
                      </WishButtonDiv>
                    </span>
                    }
                  </div>
                  :
                    <>
                    <div><PetMessageSpan className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{v.content} {v.createdAt} {v.name}</PetMessageSpan></div>
                    <NameDiv className="w-6 h-6 rounded-full order-1">{v.name}</NameDiv>
                    </>
                  }
                  </div>
              </div>
              </div>
          }

          
          
         
        </div>
      ))}
      </div>
      <div className="chat-send-prompt flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="chat-send-prompt-input flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  onChange={(e)=> onHandleMessage(e)}
                />
              </div>
            </div>
            <div>
              <button
                className="flex items-center justify-center"
                onClick={onClickSend}
              >
                <span className="ml-2">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="35" height="35" rx="5" fill="#C3C7CE" fill-opacity="0.2"/>
                <path d="M21.4288 17.3211L21.4303 17.3225C21.4537 17.3458 21.4723 17.3734 21.485 17.4039C21.4977 17.4344 21.5042 17.467 21.5042 17.5C21.5042 17.5331 21.4977 17.5657 21.485 17.5962C21.4723 17.6266 21.4537 17.6543 21.4303 17.6775L21.4274 17.6804C21.4042 17.7039 21.3765 17.7225 21.346 17.7352C21.3156 17.7479 21.2829 17.7544 21.2499 17.7544C21.2169 17.7544 21.1842 17.7479 21.1538 17.7352C21.1233 17.7225 21.0956 17.7039 21.0724 17.6804L21.0715 17.6795L18.604 15.2045L17.7499 14.3478V15.5575V21.25C17.7499 21.3163 17.7236 21.3799 17.6767 21.4268C17.6298 21.4737 17.5662 21.5 17.4999 21.5C17.4336 21.5 17.37 21.4737 17.3231 21.4268L16.9696 21.7804L17.3231 21.4268C17.2762 21.3799 17.2499 21.3163 17.2499 21.25V15.5575V14.3478L16.3958 15.2045L13.9288 17.679C13.9288 17.679 13.9288 17.6791 13.9287 17.6791C13.8813 17.7265 13.817 17.7531 13.7499 17.7531C13.6828 17.7531 13.6184 17.7264 13.5709 17.679C13.5235 17.6315 13.4968 17.5672 13.4968 17.5C13.4968 17.4668 13.5034 17.4339 13.5161 17.4032C13.5288 17.3725 13.5474 17.3446 13.5709 17.3211L13.2174 16.9675L13.5709 17.3211L17.3161 13.576C17.3392 13.5545 17.3662 13.5376 17.3956 13.5262L17.3957 13.5263L17.4049 13.5225C17.4658 13.4975 17.534 13.4975 17.5949 13.5225L17.5949 13.5226L17.6041 13.5262C17.6336 13.5376 17.6606 13.5545 17.6837 13.576L21.4288 17.3211Z" stroke="white"/>
                </svg>
                </span>
              </button>
            </div>
          </div>
      </div>
      
      </div>
  )
}

export default ChatRoom;
