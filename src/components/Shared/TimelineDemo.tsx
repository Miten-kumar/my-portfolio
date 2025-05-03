import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 -2025",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Working as a Full Stack Developer on <strong>SupplyHive</strong> — a B2B supplier management platform.
            Technologies: React, Redux, TypeScript, NestJS, MongoDB, Redis, GCP, Bull Queue, Cron Jobs, Notifications via Postmark, and more.
            Responsibilities include feature development, bug fixing, performance optimization, role & permission management, supplier score calculation, AI services integration, scalable system design, and full package upgrades.
          </p>
          <div>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Working on <strong>SupplyHive</strong>, a B2B supply chain management platform. Built using <strong>React</strong>, <strong>NestJS</strong>, <strong>MUI</strong>, <strong>Redux</strong>, <strong>TypeScript</strong>, and many modern technologies.
            </p>
            <ul className="mb-8 list-disc pl-5 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200 leading-relaxed tracking-wide space-y-2">              <li>Role & permission management</li>
              <li>Supplier dashboards, OpenAI services integration (scores & summaries)</li>
              <li>Backend with NestJS, Cron Jobs, Bull Queue, Redis, GCP, Schedule Jobs</li>
              <li>Notification service using Postmark, MongoDB, Auth0 authentication</li>
              <li>Daily client communication via Jira and Slack, Agile methodology</li>
              <li>Bug fixing, code maintenance, scalable architecture improvement</li>
              <li>Major package upgrades on both frontend and backend after 2-3 years</li>
              <li>Implemented many new features and optimized overall project execution</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <a
              href="https://medium.com/@miten.patel_67993/tanstack-upgrade-full-package-update-practical-guide-for-real-projects-b9ee0648bd6d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row gap-4"
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="Tanstack Upgrade Guide"
                className="aspect-auto w-48 object-cover rounded-md"
              />
              <div className="flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  TanStack Upgrade Full Package Update - Practical Guide
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                  I shared my real-world experience upgrading a full production project after 2-3 years, including TanStack Table, Router, Query, and more.
                </p>
                <span className="text-blue-500 mt-2 underline">
                  Read more →
                </span>
              </div>
            </a>
          </div>

        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Worked on <strong>Liquidox</strong>, a fintech website project. Developed the frontend UI in <strong>Next.js</strong> and used <strong>Strapi</strong> for content management.
          </p>
          <ul className="mb-8 list-disc pl-5 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200 leading-relaxed tracking-wide space-y-2">
            <li>Server-side API calls and single sign-on (SSO) integration</li>
            <li>Heavy animations and smooth UX improvements</li>
            <li>Worked closely with an international blockchain backend team</li>
            <li>Built marketing websites alongside application development</li>
          </ul>

          {/* Apple SSO POC Card with Thumbnail */}
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition mb-8">
            <a
              href="https://docs.google.com/document/d/1Y5jWDMWTkRPOSrPVS8UnkjZ-TmgrUOxyqHBz95CHx_Q/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row gap-4"
            >
              {/* Thumbnail */}
              <img
                src="https://miro.medium.com/v2/resize:fit:1200/1*JohEfVg-_llWGN9cdQc-xQ.png"
                alt="Apple SSO"
                className=" aspect-auto w-48 object-cover rounded-md"
              />
              {/* Text Content */}
              <div className="flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  Apple SSO Integration (POC)
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                  Built a real-world POC for integrating Apple Single Sign-On (SSO) with Next.js, handling edge cases and secure best practices.
                </p>
                <span className="text-blue-500 mt-2 underline">
                  View Documentation →
                </span>
              </div>
            </a>
          </div>

           {/* Gym Management Website */}
      <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
        Also worked on a <strong>Gym Management Website</strong> project, focused on admin dashboards and membership management, built with <strong>Next.js</strong>, <strong>Shadcn UI</strong>, and <strong>Node.js (Express)</strong> for backend.
      </p>
      <ul className="mb-8 list-disc pl-5 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200 leading-relaxed tracking-wide space-y-2">
        <li>Multi-role support: Admin, Trainer, Member, Employee, Visitor</li>
        <li>Center dashboards, reporting modules, subscription and package handling</li>
        <li>Payment integration and basic CRUD operations</li>
        <li>Used Shadcn UI components for clean and modern frontend design</li>
        <li>Optimized server-side APIs with Node.js and Express</li>
      </ul>

      {/* Early 2023 Learning */}
      <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
        In early 2023, during the training phase, I learned <strong>React</strong>, <strong>Node.js (Express)</strong>, <strong>Docker basics</strong>, and <strong>Shell scripting</strong>. Built a small blog application as a hands-on project.
      </p>
      <ul className="mb-8 list-disc pl-5 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200 leading-relaxed tracking-wide space-y-2">
        <li>Created  blog application to apply my learnings</li>
        <li>Explored Docker containers and shell script automation</li>
      </ul>
    </div>
      ),
    },


  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
