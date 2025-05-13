"use client";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import { useState } from "react";

export default function StatePage() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [animal, setAnimal] = useState("");

  return (
    <div>
      <MenuBar page={"เรียนรู้ state"}/>
      <div className="p-4">
        <h1 className="text-center text-4xl">Switch ไฟ</h1>
        <p className="text-center text-xl">เรียนรู้การ toggle state</p>
        <div className="flex justify-center mt-4">
          <button
            className="bg-red-600 p-4 rounded-2xl text-3xl"
            onClick={() => setIsLightOn((prev) => !prev)}
          >
            เปิด / ปิด ไฟ
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {isLightOn ? (
            <img src="https://www.w3schools.com/js/pic_bulbon.gif" />
          ) : (
            <img src="https://www.w3schools.com/js/pic_bulboff.gif" />
          )}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-center text-3xl font-bold">เพิ่ม / ลด เลข </h2>
        <p className="text-center text-3xl ">เรียนรู้การเปลียน State</p>

        <h2 className=" text-5xl font-bold text-center mt-5">{animal}</h2>
        <div className="flex justify-center gap-4 mt-5">
          <button
            className="p-4 font-bold text-2xl bg-yellow-600 rounded-xl"
            type="button"
            onClick={() => setAnimal("แมว")}
          >
            เเมว
          </button>

          <button
            className="p-4 font-bold text-2xl bg-yellow-600 rounded-xl"
            type="button"
            onClick={() => setAnimal("หมา")}
          >
            หมา
          </button>

          <button
            className="p-4 font-bold text-2xl bg-yellow-600 rounded-xl"
            type="button"
            onClick={() => setAnimal("จิงโจ้")}
          >
            จิงโจ้
          </button>

          <button
            className="p-4 font-bold text-2xl bg-yellow-600 rounded-xl"
            type="button"
            onClick={() => setAnimal("หมูเด้ง")}
          >
            หมูเด้ง
          </button>


        </div>

        <div className=""></div>
      </div>
    </div>
  );
}