// Project6.jsx

import { useEffect, useState } from "@importReacts";
import { useResponsive, useStoreLoading } from "@importHooks";
import { Swiper, SwiperSlide, Navigation, Pagination } from "@importLibs";
import { Div, Img, Hr } from "@importComponents";
import { Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Project6 = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { setLOADING } = useStoreLoading();
  const { xxs, xs, sm, md, lg, xl, xxl, paperClass } = useResponsive();

  // 2-1. useState ---------------------------------------------------------------------------------
  const [OBJECT, _setOBJECT] = useState<any>([
    {
      title: "Information",
      section: [
        {
          title: "Name",
          value: "Jportfolio",
        },
        {
          title: "Detail",
          value: "React를 활용한 개인 포트폴리오 웹사이트",
        },
        {
          title: "Period",
          value: "2023.04.26 - 2023.05.23",
        },
        {
          title: "Role",
          value: "총 1명 (개인)",
        },
        {
          title: "Git",
          value: "github.com/JUNGHO-GIT/JREACT.git",
        },
        {
          title: "Url",
          value: "junghomun.com",
        },
      ],
    },
    {
      title: "Features",
      section: [
        {
          title: "React Framework",
          value: "React(v18)를 활용, SPA 방식의 종합 포트폴리오 웹사이트 제작",
        },
        {
          title: "Hooks & Router",
          value: "React Hooks와 React Router를 활용하여 효율적 상태 관리와 동적 라우팅을 구현",
        },
        {
          title: "Component",
          value: "컴포넌트 기반의 구조 설계를 통한 효율적인 상태 관리 및 코드 재사용성 확보",
        },
        {
          title: "Nginx Server",
          value: "Nginx 서버를 활용하여 정적 파일 서비스 제공 및 리버스 프록시 서버 구축",
        },
        {
          title: "Cloud Instance",
          value: "GCP 인스턴스의 CentOS7 환경에서 서버를 구축하고, DNS 설정을 통해 도메인과 서버를 연결",
        },
      ],
    },
    {
      title: "Frontend",
      section: [
        {
          title: "Language",
          value: [
            { icon: "html", value: "Html" },
            { icon: "css", value: "Css" },
            { icon: "js", value: "Js" },
            { icon: "ts", value: "Ts" },
          ],
        },
        {
          title: "Framework",
          value: [
            { icon: "react", value: "React" },
            { icon: "mui", value: "MaterialUI" },
          ],
        },
      ],
    },
    {
      title: "Backend",
      section: [
        {
          title: "Language",
          value: [
            { icon: "nodejs", value: "Nodejs" },
          ],
        },
        {
          title: "Package, Build, Scm",
          value: [
            { icon: "npm", value: "Npm" },
            { icon: "json", value: "Json" },
            { icon: "github", value: "Git" },
          ],
        },
      ],
    },
    {
      title: "Server",
      section: [
        {
          title: "Server",
          value: [
            { icon: "nginx", value: "Nginx" },
          ],
        },
        {
          title: "Cloud",
          value: [
            { icon: "gcp", value: "Gcp" },
            { icon: "centos", value: "Centos7" },
          ],
        },
      ],
    },
  ]);
  const [images, _setImages] = useState<string[]>([
    "project6_1",
    "project6_2",
    "project6_3",
    "project6_4",
    "project6_5",
  ]);

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    setLOADING(true);
  }, []);

  // 7. project ------------------------------------------------------------------------------------
  const projectNode = () => (
    <Paper className={`detail-wrapper ${paperClass} border-0 radius-0 shadow-0`}>
      {/** images **/}
      <Grid container={true} spacing={0} className={"w-100p d-center"}>
        <Grid size={12} className={"d-col-center"}>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              enabled: true,
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              enabled: true,
              clickable: true,
              el: ".image-pagination",
            }}
            modules={[
              Pagination, Navigation,
            ]}
          >
            {images.map((image: string, i: number) => (
              <SwiperSlide className={"w-100p p-relative"} key={i}>
                <Img
                  max={1000}
                  hover={false}
                  shadow={false}
                  radius={false}
                  border={true}
                  src={`${image}.webp`}
                  group={"projects"}
                />
              </SwiperSlide>
            ))}
            <Div className={"swiper-button-prev"} />
            <Div className={"swiper-button-next"} />
          </Swiper>
        </Grid>
        <Grid size={12} className={"d-row-center"}>
          <Div className={"image-pagination transform-none"} />
        </Grid>
      </Grid>
      <Hr m={40} className={"bg-light h-5px"} />
      <Grid container={true} spacing={2} columnSpacing={10} className={"h-100p d-top"}>
        {/** info, features **/}
        <Grid size={(xxs || xs || sm) ? 12 : (md || lg || xl || xxl) ? 6 : 6}>
          <Grid container={true} spacing={2}>
            {OBJECT.filter((_: any, f: number) => f < 2).map((item: any, i: number) => (
              <Grid size={12} className={"d-col-left"} key={i}>
                <Div className={"fs-1-6rem fw-700 dark-navy mb-20px"}>
                  {item.title}
                  <Hr className={"w-100px bg-primary h-3px"} />
                </Div>
                {item.section.map((section: any, j: number) => (
                  <Div className={"w-100p d-col-left mb-30px"} key={j}>
                    <Div className={"d-row-center mb-10px"}>
                      <Div className={"fs-0-4rem fw-300 dark-navy mr-5px"}>
                        {'●'}
                      </Div>
                      <Div className={"fs-1-1rem fw-600 dark-navy"}>
                        {section.title}
                      </Div>
                    </Div>
                    <Div className={"d-row-center ml-10px"}>
                      {["Git", "Url"].includes(section.title) ? (
                        <Div className={"d-row-left mr-0px"}>
                          <Div className={"fs-1-0rem fw-400 blue hover lh-2-0"}>
                            {`- ${section.value}`}
                          </Div>
                        </Div>
                      ) : (
                        <Div className={"d-row-left mr-0px"}>
                          <Div className={"fs-1-0rem fw-400 light-black lh-2-0"}>
                            {`- ${section.value}`}
                          </Div>
                        </Div>
                      )}
                    </Div>
                  </Div>
                ))}
                <Hr className={"bg-light h-5px"} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/** frontend, backend, server **/}
        <Grid size={(xxs || xs || sm) ? 12 : (md || lg || xl || xxl) ? 6 : 6}>
          <Grid container={true} spacing={2}>
            {OBJECT.filter((_: any, f: number) => f >= 2).map((item: any, i: number) => (
              <Grid size={12} className={"d-col-left"} key={i}>
                <Div className={"fs-1-6rem fw-700 dark-navy mb-20px"}>
                  {item.title}
                  <Hr className={"w-100px bg-primary h-3px"} />
                </Div>
                {item.section.map((section: any, j: number) => (
                  <Div className={"w-100p d-col-left mb-30px"} key={j}>
                    <Div className={"d-row-center mb-10px"}>
                      <Div className={"fs-0-4rem fw-300 dark-navy mr-5px"}>
                        {'●'}
                      </Div>
                      <Div className={"fs-1-1rem fw-600 dark-navy"}>
                        {section.title}
                      </Div>
                    </Div>
                    <Div className={"d-row-center ml-10px"}>
                      {section.value.map((value: any, k: number) => (
                        <Div className={`d-row-center mr-20px`} key={k}>
                          <Img
                            max={20}
                            hover={true}
                            shadow={false}
                            border={false}
                            radius={false}
                            group={"icons"}
                            src={`${value.icon}.webp`}
                            className={"mr-5px"}
                          />
                          <Div className={"fs-1-0rem fw-400 light-black lh-2-0"}>
                            {value.value}
                          </Div>
                        </Div>
                      ))}
                    </Div>
                  </Div>
                ))}
                <Hr className={"bg-light h-5px"} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      {projectNode()}
    </>
  );
};