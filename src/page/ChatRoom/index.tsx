import { useEffect, useState } from "react";
import { getPetHistoryList } from "../../services/pet/getPetHistoryList";
import { petHistoryDataListAtom } from "../../atom/petHistory";
import { useRecoilState } from "recoil";
import { getPetEnded } from "../../services/pet/getPetEnded";
import styled from "styled-components";
import { postPetHistory } from "../../services/pet/postPetHistory";
import { putPetHistoryWished } from "../../services/pet/putPetHistoryWished";
import ChatRoomHeader from "./ChatRoomHeader";
import MyChatBubble from "./MyChatBubble";
import { format } from "date-fns";
import ChatInput from "./ChatInput";
import PetChatBubble from "./PetChatBubble";

function ChatRoom() {
  const [petHistoryDataList, setPetHistoryDataList] = useRecoilState(
    petHistoryDataListAtom
  );
  const [message, setMessage] = useState<string>();
  const petId = 1;

  useEffect(() => {
    getPetEnded(petId)
      .then((res) => {
        if (!res) {
          getPetHistoryList(petId)
            .then((res) => {
              console.log(res);
              setPetHistoryDataList(res);
            })
            .catch(() => {});
        }
      })
      .catch(() => {});
  }, []);

  const onClickWish = (isWished: boolean, wishId: number) => {
    console.log(!isWished);
    putPetHistoryWished(petId, petHistoryDataList[wishId].petHistoryId)
      .then((res) => {
        setPetHistoryDataList((petHistoryDataList) =>
          petHistoryDataList.map((prevItem, i) =>
            i === wishId ? { ...prevItem, wished: !isWished } : prevItem
          )
        );
      })
      .catch(() => {});
  };
  const onClickSend = () => {
    if (message !== undefined) {
      setMessage("");
      postPetHistory(petId, message)
        .then((res) => {
          console.log(res);
          setPetHistoryDataList((prev) => [...prev, ...res]);
        })
        .catch(() => {});
    }
  };

  const onHandleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const ChatImg = styled.img`
    border-radius: 20px;
    border: 10px solid white;
  `;

  const MessageSpan = styled.span`
    min-width: 180px;
    max-width: 250px;
    border-radius: 25px 34px 0px 25px;
    background-color: #c6c9ff;
  `;

  const PetMessageSpan = styled.span`
    min-width: 180px;
    max-width: 250px;
    border-radius: 18px 25px 25px 0px;
    background-color: white;
  `;

  const NameDiv = styled.div`
    width: 100%;
    text-align: end;
  `;

  const WishButtonDiv = styled.div`
    padding-left: 10px;
  `;

  return (
    <>
      <div className="relative bg-transparent">
        <ChatRoomHeader title={format(new Date(), "yyyy년 MM월 dd일")} />
        <div
          id="messages"
          className="flex flex-col h-screen space-y-4 -mt-12 pt-16 pb-40 overflow-y-scroll"
        >
          {petHistoryDataList?.map((chat, index) => (
            <div className="h-2/5">
              {chat.objectType === "PERSON" ? (
                <MyChatBubble content={chat.content} time={chat.createdAt} />
              ) : (
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div>
                      {chat.mediaType === "IMAGE" ? (
                        <div className="flex">
                          <span>
                            <ChatImg src={chat.content} />
                          </span>
                          {chat.wished === true ? (
                            <span className="relative">
                              <WishButtonDiv
                                className="absolute top-[90%]"
                                onClick={() => onClickWish(chat.wished, index)}
                              >
                                <svg
                                  width="25"
                                  height="25"
                                  viewBox="0 0 25 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="25"
                                    height="25"
                                    rx="5"
                                    fill="white"
                                    fillOpacity="0.8"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.6487 5.8785C16.7711 5.96653 17.8249 6.45303 18.62 7.25012C19.4956 8.13117 19.9872 9.32292 19.9872 10.5651C19.9872 11.8073 19.4956 12.9991 18.62 13.8801L13.9625 18.5451C13.5724 18.929 13.0472 19.1441 12.5 19.1441C11.9528 19.1441 11.4275 18.929 11.0375 18.5451L6.37996 13.8801C5.53608 13.0421 5.04105 11.9155 4.99456 10.7271C4.94808 9.53876 5.35359 8.37692 6.12944 7.47556C6.90529 6.57421 7.99385 6.0003 9.1759 5.8694C10.358 5.73851 11.5457 6.06035 12.5 6.77012C13.4095 6.10672 14.5264 5.79047 15.6487 5.8785Z"
                                    fill="#A1A5FF"
                                  />
                                </svg>
                              </WishButtonDiv>
                            </span>
                          ) : (
                            <span className="relative">
                              <WishButtonDiv
                                className="absolute top-[90%]"
                                onClick={() => onClickWish(chat.wished, index)}
                              >
                                <svg
                                  width="25"
                                  height="25"
                                  viewBox="0 0 25 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    width="25"
                                    height="25"
                                    rx="5"
                                    fill="white"
                                    fillOpacity="0.8"
                                  />
                                  <rect
                                    width="25"
                                    height="25"
                                    rx="5"
                                    fill="white"
                                    fillOpacity="0.8"
                                  />
                                  <path
                                    d="M12.2016 7.17119L12.4971 7.39098L12.7946 7.17397C13.6078 6.58088 14.6062 6.29815 15.6096 6.37685C16.6128 6.45553 17.5548 6.89032 18.2656 7.6027C19.048 8.39005 19.4872 9.45498 19.4872 10.565C19.4872 11.6749 19.0481 12.7398 18.2658 13.5271C18.2656 13.5272 18.2655 13.5274 18.2653 13.5275L13.6103 18.1901C13.3139 18.481 12.9153 18.644 12.5 18.644C12.0847 18.644 11.686 18.481 11.3896 18.1901L6.7338 13.5267L6.7338 13.5267L6.73228 13.5252C5.97812 12.7763 5.53572 11.7695 5.49418 10.7075C5.45264 9.64545 5.81504 8.60714 6.50839 7.80162C7.20175 6.99611 8.17456 6.48322 9.23093 6.36624C10.2873 6.24926 11.3488 6.53689 12.2016 7.17119ZM17.916 13.1986L18.0625 13.0521V13.0143C18.6452 12.3305 18.9621 11.4565 18.9501 10.5536C18.9371 9.58177 18.5441 8.65366 17.8552 7.96808L17.8537 7.9667C17.1608 7.28255 16.2262 6.89893 15.2525 6.89893C14.2787 6.89893 13.3441 7.28255 12.6512 7.9667L12.6512 7.96668L12.6475 7.9704C12.6242 7.99383 12.5966 8.01243 12.5661 8.02512L12.7584 8.48667L12.5661 8.02512C12.5356 8.03781 12.503 8.04435 12.47 8.04435C12.437 8.04435 12.4043 8.03781 12.3738 8.02512L12.1815 8.48667L12.3738 8.02512C12.3434 8.01243 12.3157 7.99383 12.2925 7.9704L12.2925 7.97038L12.2888 7.9667C11.5958 7.28255 10.6612 6.89893 9.68746 6.89893C8.71369 6.89893 7.77912 7.28255 7.08617 7.9667L7.08612 7.96664L7.08005 7.97285C6.40046 8.66752 6.01992 9.60069 6.01992 10.5725C6.01992 11.5443 6.40046 12.4775 7.08005 13.1722L7.08004 13.1722L7.08306 13.1752L11.7397 17.8543C11.7399 17.8545 11.74 17.8547 11.7402 17.8548C11.8396 17.9551 11.9578 18.0346 12.0881 18.089C12.2186 18.1434 12.3586 18.1714 12.5 18.1714C12.6414 18.1714 12.7813 18.1434 12.9118 18.089C13.0419 18.0347 13.1599 17.9553 13.2592 17.8554C13.2595 17.855 13.2599 17.8547 13.2602 17.8543L17.916 13.1986Z"
                                    stroke="#A1A5FF"
                                  />
                                </svg>
                              </WishButtonDiv>
                            </span>
                          )}
                        </div>
                      ) : (
                        <PetChatBubble
                          petName={chat.name}
                          content={chat.content}
                          time={chat.createdAt}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* 메세지 입력창 */}
      </div>
      <ChatInput onClickSend={onClickSend} onHandleMessage={onHandleMessage} />
    </>
  );
}

export default ChatRoom;
