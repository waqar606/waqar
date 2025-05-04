"use client";
import IconButtonWithAnimation from "@/components/custom/IconButtonWithAnimation";
import TextSliderButton from "@/components/custom/TextSliderWithButton";
import { ExperienceCard } from "@/components/experience-card";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Navbar from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/data/projects";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { act, Fragment, useEffect, useState } from "react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const uniqueHashtags = Array.from(
    new Set(PROJECTS.flatMap((project) => project.majorHashtags))
  );

  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [activeTabs, setActiveTabs] = useState<string[]>(["All"]);

  useEffect(() => {
    if (activeTabs.includes("All")) {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(
        PROJECTS.filter((each) =>
          each.majorHashtags.some((major) => activeTabs.includes(major))
        )
      );
    }
  }, [activeTabs]);

  return (
    <Fragment>
      <div className="relative min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto pt-12 sm:pt-24 px-6">
        <main className="flex flex-col min-h-[100dvh] space-y-10">
          <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-4">
              <div className="gap-2 flex justify-between">
                <div className="flex-col flex flex-1 space-y-1.5">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                  />
                  <BlurFadeText
                    className="max-w-[600px] md:text-xl"
                    delay={BLUR_FADE_DELAY}
                    text={DATA.description}
                  />
                </div>
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <Avatar className="size-28 border">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </BlurFade>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex items-center gap-2">
                  <IconButtonWithAnimation variant="linkedin" isBlack />
                  <IconButtonWithAnimation variant="github" isBlack />
                  <IconButtonWithAnimation variant="facebook" isBlack />
                  <IconButtonWithAnimation variant="instagram" isBlack />
                  <IconButtonWithAnimation variant="phone" isBlack />
                </div>
                <Link href={`/Huzaifa's Resume.pdf`} target="_blank">
                  <TextSliderButton
                    textOne="Download CV"
                    textTwo="Download CV"
                    blackVariant
                  />
                </Link>
              </BlurFade>
            </div>
          </section>
          <section id="about">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-bold">About</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                {DATA.summary}
              </Markdown>
            </BlurFade>
          </section>
          <section id="work">
            <div className="flex min-h-0 flex-col gap-y-4">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-xl font-bold">Work Experience</h2>
              </BlurFade>
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ExperienceCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.journey[0].title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.journey[work.journey.length - 1].start} - ${
                      work.journey[0].end
                    }`}
                    journey={[...work.journey]}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
          <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="text-xl font-bold">Education</h2>
              </BlurFade>
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <ResumeCard
                    key={education.school}
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                    description={[...education.description]}
                    gradeAcheived={education.gradeAcheived}
                    skills={[...education.skills]}
                    value={education.value}
                    keyVal={education.key}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
          <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="text-xl font-bold">Skills</h2>
              </BlurFade>
              <div className="flex flex-col gap-2">
                {DATA.skills.map((skill, id) => (
                  <>
                    <h3 className="font-bold text-sm">{skill.heading}:</h3>
                    <div className="flex flex-wrap gap-1">
                      {skill.skills.map((each) => (
                        <BlurFade
                          key={each}
                          delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                        >
                          <Badge key={each}>{each}</Badge>
                        </BlurFade>
                      ))}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
          <section id="projects">
            <div className="space-y-12 w-full pt-12 pb-6">
              <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                      My Projects
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Check out my latest work
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      I&apos;ve worked on a variety of projects.
                    </p>
                  </div>
                </div>
                <div className="mt-4 max-w-[800px] mx-auto flex flex-wrap items-center justify-center gap-1">
                  {["All", ...uniqueHashtags].map((each, idx) => (
                    <Badge
                      key={idx}
                      variant={
                        activeTabs?.includes(each) ? "default" : "outline"
                      }
                      className="flex gap-2 px-2 py-1 text-[10px] items-center justify-center cursor-pointer"
                      onClick={() => {
                        if (each === "All") {
                          setActiveTabs(["All"]);
                        } else {
                          setActiveTabs((prev) =>
                            prev.filter(
                              (filteredValue) => filteredValue !== "All"
                            )
                          );
                        }
                        if (activeTabs?.includes(each)) {
                          setActiveTabs((prev) =>
                            prev.filter(
                              (filteredValue) => filteredValue !== each
                            )
                          );
                        } else {
                          setActiveTabs((prev) => [...prev, each]);
                        }
                      }}
                    >
                      {each}
                    </Badge>
                  ))}
                </div>
              </BlurFade>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {filteredProjects.map((project, id) => (
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <ProjectCard
                      href={project.liveLinks[0]}
                      key={project.title}
                      title={project.title}
                      tagLine={project.tagLine}
                      description={project.mainPara}
                      tags={[
                        ...project.majorHashtags,
                        ...project.minorHashtags,
                      ]}
                      image={project.titlePictureURL}
                      video={project.mp4URL}
                      gitLinks={project.gitLinks}
                      liveLinks={project.liveLinks}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>
          {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
          {/* <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link href={""} className="text-blue-500 hover:underline">
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section> */}
        </main>
        <Navbar />
      </div>
      <section
        className="bg-primary text-primary-foreground w-full font-sans"
        id="contact"
      >
        <div className="container mx-auto pt-14 md:pt-20 pb-5 flex flex-col gap-3 uppercase px-3">
          {/* <Logo isWhite /> */}
          <h5 className="text-xl">
            Have Some project in mind or want to know more about me
          </h5>
          <h1 className="font-semibold text-4xl md:text-6xl lg:text-[65px]">
            let&apos;s talk
          </h1>
          <div className="">
            <a href="mailto:huzaifainshal@gmail.com">
              <button className="px-4 py-3 rounded-md border border-primary-foreground/70 hover:border-primary-foreground transition-all text-primary-foreground">
                Email me
              </button>
            </a>
          </div>
          <hr className="border-white my-5" />
          <div className="flex flex-row items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <IconButtonWithAnimation variant="linkedin" />
              <IconButtonWithAnimation variant="github" />
              <IconButtonWithAnimation variant="facebook" />
              <IconButtonWithAnimation variant="instagram" />
              <IconButtonWithAnimation variant="phone" />
            </div>
            <p className="text-xs">Copyright @2024, Huzaifa Inshal</p>
            <TextSliderButton
              textOne="back to top"
              textTwo="back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
