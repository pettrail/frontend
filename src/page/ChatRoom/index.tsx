import { useEffect, useRef, useState } from "react";
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
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useForm } from "react-hook-form";

export interface IChatInputs {
  message: string;
}

function ChatRoom() {
  const {
    register,
    getValues,
    reset,
    formState: { isValid },
  } = useForm<IChatInputs>();
  const chatRoomRef = useRef<HTMLDivElement>(null);

  const [petHistoryDataList, setPetHistoryDataList] = useRecoilState(
    petHistoryDataListAtom
  );
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

  useEffect(() => {
    chatRoomRef.current!!.scrollTop = chatRoomRef.current!!.scrollHeight;
  }, [petHistoryDataList.length]);

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
    const { message } = getValues();
    if (message !== "") {
      postPetHistory(petId, message)
        .then((res) => {
          console.log(res);
          setPetHistoryDataList((prev) => [...prev, ...res]);
          console.log("test");
          reset();
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <div className="relative bg-transparent w-full">
        <ChatRoomHeader title={format(new Date(), "yyyy년 MM월 dd일")} />
        <div
          ref={chatRoomRef}
          id="messages"
          className="flex flex-col h-screen space-y-3 -mt-12 pt-16 pb-[6.5rem] overflow-y-scroll"
        >
          {petHistoryDataList?.map((chat, index) => (
            <div key={chat.createdAt}>
              {chat.objectType === "PERSON" ? (
                <MyChatBubble content={chat.content} time={chat.createdAt} />
              ) : (
                <div className="flex w-full">
                  <div className="flex flex-col space-y-2 text-xs mx-2 order-2 items-start">
                    <div>
                      {chat.mediaType === "IMAGE" ? (
                        <div className="flex items-end max-w-[70%]">
                          <div className="mt-3 bg-white p-1.5 rounded-lg mr-1 ml-9">
                            <img
                              alt="petImg"
                              src={chat.content}
                              className="object-cover object-center rounded-lg"
                            />
                          </div>
                          <button
                            onClick={() => onClickWish(chat.wished, index)}
                            className="flex items-center justify-center bg-white p-1 text-base rounded-md text-primary"
                          >
                            {chat.wished ? <FaHeart /> : <FaRegHeart />}
                          </button>
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
      <ChatInput
        register={register}
        isValid={isValid}
        onClickSend={onClickSend}
      />
    </>
  );
}

export default ChatRoom;
