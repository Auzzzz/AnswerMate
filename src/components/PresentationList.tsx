import { PresentationActions, PresentationQuestions } from "@/interface";
import React, { useState } from "react";
import { set } from "react-hook-form";

const Card = (props: PresentationQuestions) => {
  const { questionId, question, orderId, updateQuestion, deleteQuestion } =
    props;
  const [isEditing, setIsEditing] = useState(false);

  const editQuestion = (
    e: React.MouseEvent<HTMLButtonElement>,
    questionId: number
  ) => {
    e.preventDefault();
    setIsEditing(true);
  };


  return (
    <li className="list-row" key={questionId}>
      <div className="text-4xl font-thin opacity-30 tabular-nums">
        {questionId}
      </div>
      {!isEditing ? (
        <div className="list-col-grow mt-2 text-lg">
          <div>{question}</div>
        </div>
      ) : (
        <input type="text" placeholder="Type here" className="input w-full " />
      )}

      {!isEditing ? (
        <div>
          <button
            className="btn btn-square btn-ghost"
            onClick={(e) => editQuestion(e, questionId)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <button
            className="btn btn-square btn-ghost"
            onClick={() => deleteQuestion(questionId)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div>
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setIsEditing(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setIsEditing(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </li>
  );
};

// const PresentationList = (props: PresentationQuestions, {addQuestion, deleteQuestion, updateQuestion, reorderQuestion}: PresentationActions) => {

//   return (
//     <div>
//       <Card {...props}/>
//     </div>
//   );
// };

export default Card;
