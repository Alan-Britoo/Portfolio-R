import React from "react";
import { NavBar, NavIcons } from "./navBar";
import icoo from "../assets/logos_react.svg";
import "../Contenedores/info.css";
import tai from "../assets/tailwind.svg";
import gi from "../assets/git-icon.svg";

import lara from "../assets/Laravel.png";
import ph from "../assets/php.png";

import ht from "../assets/iconos/html.svg";
import css from "../assets/iconos/css.webp";
import js from "../assets/iconos/js.svg";
import php from "../assets/iconos/php.svg";
import react from "../assets/iconos/react.svg";
import la from "../assets/iconos/laravel.png";
import tw from "../assets/iconos/tailwind.svg";
import git from "../assets/iconos/git.svg";
import gh from "../assets/iconos/github.svg";
import boot from "../assets/iconos/boot.svg";

export default function Infoicon() {
  return (
    <>
      {/* <div className="flex flex-wrap justify-center w-[70%] mx-auto h-[30%] transform  hover:scale-[1.03] transition duration-500 ease-in-out animate-pulse   ">
        <div
          className="flex flex-column justify-center gap-[6%] w-[100%] mx-auto hover:bg-[#1d1c1c] rounded-3xl  "
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="h-[120px] w-[110px]  transform  hover:scale-110 transition duration-200 ease-in-out   ">
            <NavIcons
              url={`data:image/svg+xml,${encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 120 120" fill="none"><path d="M22.1325 102.004L13.7063 7.5H106.294L97.8563 101.989L59.9438 112.5L22.1325 102.004Z" fill="#E44F26"/><path d="M60 104.467L90.6375 95.9737L97.845 15.2287H60V104.467Z" fill="#F1662A"/><path d="M60 50.2763H44.6625L43.605 38.4075H60V26.8163H30.9375L31.215 29.9288L34.0613 61.8675H60V50.2763ZM60 80.3775L59.9475 80.3925L47.04 76.9088L46.215 67.665H34.5787L36.2025 85.86L59.9475 92.4525L60 92.4375V80.3775Z" fill="#EBEBEB"/><path d="M59.9587 50.2763V61.8675H74.2312L72.8887 76.9013L59.9587 80.3888V92.4488L83.7225 85.86L83.895 83.9025L86.6175 53.3888L86.9025 50.2763H59.9587ZM59.9587 26.8163V38.4075H87.9562L88.1887 35.805L88.7175 29.9288L88.995 26.8163H59.9587Z" fill="white"/></svg>'
              )}`}
              alt={"HTML"}
              url2={""}
            />
          </div>
          <div className="h-[120px] w-[110px]  transform  hover:scale-110 transition duration-200 ease-in-out  ">
            <NavIcons
              url={`data:image/svg+xml,${encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="110" height="120" viewBox="0 0 120 119" fill="none"><path d="M22.1325 101.154L13.71 7.4375H106.29L97.8562 101.139L59.9437 111.562L22.1325 101.154Z" fill="#1572B6"/><path d="M60 103.597L90.6375 95.174L97.845 15.1018H60V103.597Z" fill="#33A9DC"/><path d="M60 49.054H75.3375L76.395 37.2842H60V25.7895H89.0625L88.785 28.8724L85.9387 60.5487H60V49.054Z" fill="white"/><path d="M60.0713 78.9044L60.0188 78.9193L47.1113 75.4609L46.2863 66.2942H34.65L36.2738 84.3413L60.015 90.8788L60.0713 90.8639V78.9044Z" fill="#EBEBEB"/><path d="M74.3513 60.0615L72.9563 75.4534L60.03 78.9119V90.8714L83.79 84.3412L83.9663 82.4001L85.98 60.0615H74.3513Z" fill="white"/><path d="M60.0413 25.7895V37.2842H32.0438L31.8113 34.6996L31.2825 28.8724L31.005 25.7895H60.0413ZM60 49.054V60.5487H47.2538L47.0213 57.9641L46.4963 52.1369L46.2188 49.054H60Z" fill="#EBEBEB"/></svg>'
              )}`}
              alt={"css"}
              url2={""}
            />
          </div>
          <div className="h-[120px] w-[110px]  transform  hover:scale-110 transition duration-200 ease-in-out  ">
            <NavIcons
              url={`data:image/svg+xml,${encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="120" viewBox="0 0 120 120" fill="none"><path d="M7.5 7.5H112.5V112.5H7.5V7.5Z" fill="#F5DE19"/><path d="M78.0338 89.5312C78.9284 91.3485 80.3183 92.8759 82.0434 93.9375C83.7684 94.9991 85.7584 95.5515 87.7838 95.5313C91.8713 95.5313 94.485 93.4875 94.485 90.6562C94.485 87.2812 91.8 86.0738 87.3 84.105L84.8325 83.0475C77.7075 80.0138 72.9825 76.215 72.9825 68.1825C72.9825 60.7838 78.6075 55.1475 87.4313 55.1475C90.2877 54.9412 93.1416 55.5805 95.637 56.9856C98.1324 58.3907 100.159 60.4994 101.464 63.0488L93.75 67.98C93.2476 66.716 92.3728 65.6345 91.2416 64.879C90.1105 64.1236 88.7764 63.7298 87.4163 63.75C86.8229 63.6906 86.2236 63.7555 85.6567 63.9404C85.0897 64.1254 84.5675 64.4265 84.1234 64.8244C83.6792 65.2224 83.3228 65.7085 83.0769 66.2518C82.831 66.7951 82.7009 67.3837 82.695 67.98C82.695 70.9388 84.5288 72.1388 88.7625 73.98L91.23 75.0375C99.615 78.6338 104.355 82.2975 104.355 90.5363C104.355 99.42 97.3763 104.287 88.005 104.287C84.3537 104.52 80.713 103.691 77.5223 101.901C74.3317 100.11 71.7274 97.4342 70.0238 94.1963L78.0338 89.5312ZM43.1775 90.3863C44.7263 93.135 46.1363 95.46 49.5263 95.46C52.7663 95.46 54.8138 94.1925 54.8138 89.2612V55.71H64.68V89.3925C64.68 99.6075 58.68 104.257 49.9463 104.257C46.8591 104.426 43.7931 103.657 41.1513 102.051C38.5096 100.444 36.4157 98.0761 35.145 95.2575L43.1775 90.3863Z" fill="black"/></svg>'
              )}`}
              alt={"JS"}
              url2={""}
            />
          </div>

          <div className="h-[120px] w-[110px]  transform  hover:scale-110 transition duration-200 ease-in-out  ">
            <NavIcons url={php} alt={"PHP"} url2={""} />
          </div>

          <div className=" h-[110px] w-[120px] flex justify-center items-center   ">
            <NavIcons url={icoo} alt={"REACT"} url2={""} />
          </div>
        </div>
        <div
          className="flex flex-column justify-center w-full gap-[6%] mt-[3%] h-full hover:bg-[#1d1c1c] rounded-3xl "
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="h-[110px] w-[100px] flex justify-center items-center bg-green-500 max-sm:py-auto ">
            <NavIcons url={lara} alt={"LARAVEL"} url2={""} />
          </div>
          <div className="h-[110px] w-[100px] flex justify-center items-center transform hover:scale-110 transition duration-300 ease-in-out ">
            <NavIcons
              url={`data:image/svg+xml,${encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="120" viewBox="0 0 88 87" fill="none"><g clip-path="url(#clip0_14_49)"><path d="M0 75.7821C0 81.9781 5.08028 87 11.3468 87H76.6528C82.9204 87 88 81.9774 88 75.7821V11.2182C88 5.02187 82.9197 0 76.6532 0H11.3472C5.07959 0 0 5.02255 0 11.2179V75.7818V75.7821Z" fill="#563D7C"/><path d="M36.4919 38.4832V26.1629H47.4613C48.5063 26.1629 49.5135 26.2489 50.4836 26.4212C51.4536 26.5931 52.312 26.9003 53.0583 27.3431C53.8042 27.786 54.4013 28.4007 54.8492 29.1875C55.2968 29.9746 55.5209 30.9829 55.5209 32.2121C55.5209 34.4255 54.8492 36.0241 53.5058 37.0076C52.1628 37.9915 50.4464 38.4832 48.3568 38.4832H36.4919ZM24.7759 17.1621V69.8379H50.5956C52.9837 69.8379 55.3095 69.5429 57.5731 68.9526C59.8367 68.3623 61.8514 67.4525 63.6176 66.223C65.3834 64.9934 66.789 63.407 67.8337 61.4645C68.8787 59.5216 69.4008 57.2222 69.4008 54.5663C69.4008 51.2709 68.5923 48.4553 66.9757 46.1192C65.3587 43.7828 62.9084 42.1474 59.6249 41.2129C62.0129 40.0819 63.8166 38.6307 65.0355 36.8601C66.2541 35.0895 66.8636 32.8765 66.8636 30.2203C66.8636 27.7612 66.4532 25.6956 65.6323 24.0232C64.8114 22.3512 63.6547 21.0108 62.1621 20.0025C60.6699 18.9942 58.879 18.2686 56.7893 17.8262C54.7 17.3833 52.3866 17.1621 49.8493 17.1621H24.7759ZM36.4919 60.8371V46.3771H49.2523C51.7895 46.3771 53.8293 46.9548 55.3717 48.111C56.9138 49.2668 57.6851 51.1971 57.6851 53.9023C57.6851 55.2797 57.4486 56.4107 56.976 57.296C56.5033 58.1813 55.8691 58.8823 55.073 59.3986C54.2772 59.9151 53.3566 60.2839 52.312 60.5054C51.267 60.7263 50.1728 60.8371 49.0285 60.8371H36.4919Z" fill="white"/></g><defs><clipPath id="clip0_14_49"><rect width="88" height="87" fill="white"/></clipPath></defs></svg>'
              )}`}
              alt={"BOOSTRAP"}
              url2={""}
            />
          </div>
          <div className="h-[110px] w-[100px] flex justify-center items-center transform hover:scale-110 transition duration-300 ease-in-out ">
            <NavIcons
              url={`data:image/svg+xml,${encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="120" viewBox="0 0 30 30" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" fill="#A7A7A7"/></svg>'
              )}`}
              alt={"GITHUB"}
              url2={""}
            />
          </div>
          <div className="h-[110px] w-[100px] flex justify-center items-center hover:scale-[1.2] duration-500">
            <NavIcons url={tai} alt={"TAILWIND"} url2={""} />
          </div>
          <div className="h-[120px] w-[120px]  flex justify-center items-center ">
            <NavIcons url={git} alt={"GIT"} url2={""} />
          </div>
        </div>
      </div> */}
      <div className="slider  ">
        <div className="slide-track gap-[1.5%] flex items-center justify-center ">
          <div className="slide">
            <img src={ht} alt="" className="max-sm:h-[60px] h-[92px]" />
          </div>
          <div className="slide">
            <img src={react} alt="" className="max-sm:h-[60px]" />
          </div>
          <div className="slide ">
            <img className=" h-[80px] max-sm:h-[60px]" src={css} alt="" />
          </div>
          <div className="slide">
            <img src={la} alt="" className="max-sm:h-[60px]" />
          </div>

          <div className="slide flex justify-center items-center">
            <img src={php} alt="" />
          </div>
          <div className="slide">
            <img src={js} alt="" className="max-sm:h-[60px]" />
          </div>
          <div className="slide">
            <img
              src={tw}
              alt=""
              className="flex justify-center items-center w-full"
            />
          </div>
          <div className="slide">
            <img src={git} alt="" className="max-sm:h-[60px]" />
          </div>

          <div className="slide">
            <img src={boot} alt="" className="max-sm:h-[60px]" />
          </div>
          <div className="slide  ">
            <img
              src={gh}
              alt=""
              className="fill-current bg-green-600 rounded-full max-sm:h-[60px] max-sm:w-[60px]"
            />
          </div>
          <div className="slide">
            <img src={ht} alt="" className="max-sm:h-[60px] h-[92px]" />
          </div>
          <div className="slide">
            <img src={react} alt="" className="max-sm:h-[60px]" />
          </div>
          <div className="slide">
            <img className=" h-[80px] max-sm:h-[60px]" src={css} alt="" />
          </div>
          <div className="slide">
            <img src={la} alt="" className="max-sm:h-[60px]" />
          </div>

          <div className="slide flex justify-center items-center">
            <img src={php} alt="" />
          </div>
          <div className="slide">
            <img src={js} alt="" className="max-sm:h-[60px]" />
          </div>
          <div className="slide">
            <img
              src={tw}
              alt=""
              className="flex justify-center items-center w-full"
            />
          </div>
          <div className="slide">
            <img
              src={git}
              alt=""
              className="fill-current text-red-500 max-sm:h-[60px]"
            />
          </div>

          <div className="slide">
            <img src={boot} alt="" className="max-sm:h-[60px]" />
          </div>
          <div className="slide">
            <img
              src={gh}
              alt=""
              className="fill-current bg-green-600 rounded-full max-sm:h-[60px] max-sm:w-[60px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
