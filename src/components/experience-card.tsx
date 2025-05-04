"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React, { Fragment } from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  journey: {
    start: string;
    location: string;
    end: string;
    title: string;
    description: readonly string[];
    skills: readonly string[];
  }[];
}
export const ExperienceCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  journey,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-start justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs">
                {subtitle}
                {isExpanded ? (
                  <span className="font-semibold italic text-muted-foreground">
                    {" "}
                    ~ {journey[0].start} - {journey[0].end} ~{" "}
                    {journey[0].location}
                  </span>
                ) : null}
              </div>
            )}
          </CardHeader>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,

              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-xs sm:text-sm flex flex-col"
          >
            <div className="flex flex-col">
              <div className="flex flex-col mt-1">
                {journey[0].description.map((each, i) => (
                  <p className="" key={i}>
                    - {each}
                  </p>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap mt-2">
                {journey[0].skills.map((skill, index) => (
                  <Badge
                    variant="secondary"
                    className="align-middle text-xs"
                    key={index}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            {journey.slice(1).map((journ, ind) => (
              <Fragment key={ind}>
                <div className="font-sans text-xs mt-7">
                  {journ.title}
                  <span className="font-semibold italic text-muted-foreground">
                    {" "}
                    ~ {journ.start} - {journ.end} ~ {journ.location}
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col mt-1">
                    {journ.description.map((each, i) => (
                      <p className="" key={i}>
                        - {each}
                      </p>
                    ))}
                  </div>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {journ.skills.map((skill, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Fragment>
            ))}
          </motion.div>
        </div>
      </Card>
    </Link>
  );
};
