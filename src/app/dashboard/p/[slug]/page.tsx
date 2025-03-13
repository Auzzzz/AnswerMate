"use client";

import NewPresentation from "@/components/NewPresentation";
import Card from "@/components/PresentationList";
import { PresentationQuestions } from "@/interface";
import { redirect, useParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import { set } from "react-hook-form";


export default function PresSlug() {
  // const slug = (await params).slug;
  const param = useParams();
  console.log(param.slug);
  const [questions, setQuestions] = useState<PresentationQuestions[]>([]);
  // return <div>My Post: {slug}</div>

  if (param.slug === "new") {
    return <NewPresentation />;
  }

  const tempQuestion = [
    { questionId: 1, question: "What is your name?", orderId: 1 },
    { questionId: 2, question: "What is your height?", orderId: 2 },
    { questionId: 3, question: "What is your 6 meal of the day to ensure you are getting the correct levels?", orderId: 3 },
  ];

  useEffect(() => {
    async function fetchQuestions() {
      setQuestions(questions => [...questions, ...tempQuestion ]);
    }
    fetchQuestions();
  }, []);

  const addQuestion = (question: string) => {
    const newQuestion = {
      questionId: questions.length + 1,
      question: question,
      orderId: questions.length + 1,
    };
    setQuestions(questions => [...questions, newQuestion]);
  }

  const deleteQuestion = (questionId: number) => {
    const newQuestions = questions.filter(question => question.questionId !== questionId);
    setQuestions(newQuestions);
  }

  const updateQuestion = (questionId: number, newQuestion: string) => {
      const newQuestions = questions.map(question => {
        if (question.questionId === questionId) {
          return { ...question, question: newQuestion };
        }
        return question;
      });
      setQuestions(newQuestions);
    }

  const reorderQuestion = (questionId: number, newOrderId: number) => {
    const newQuestions = questions.map(question => {
      if (question.questionId === questionId) {
        return { ...question, orderId: newOrderId };
      }
      return question;
    });
    setQuestions(newQuestions);
  }



  return (
    <main className="flex min-h-screen flex-col ">
      <div className="flex flex-col items-center m-4">
        {/* Save Bar */}
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a>
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
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Save
            </a>
          </li>
          <li>
            <a>
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
              Exit
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center flex-col gap-3 ">
        <form className="flex flex-col items-center p-4 lg:p-2">
          <div className="flex justify-center items-center flex-col gap-3">
            <h2 className="text-2xl font-bold">Presentation Name</h2>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-warning w-full max-w-xs"
              />
            </div>
          </div>

          {/* Outline Button */}
          <div className="flex justify-center items-center flex-col gap-3 mt-4">
            <h2 className="text-2xl font-bold">Questions</h2>
            <div className="flex gap-2">
              <ul className="list bg-base-100 rounded-box shadow-md">
                {questions.map((question) => (
                  <Card {...question} deleteQuestion={deleteQuestion} updateQuestion={updateQuestion}/>
                ))}
                
              </ul>
            </div>
          </div>
        </form>
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a>
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
