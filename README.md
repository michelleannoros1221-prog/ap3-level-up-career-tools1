# AP3 Career Pathways — Employee Learning Lab

A working, browser-based **self-guided career development website prototype** designed for entry-level AP3 Transportation employees who want to improve professional habits and prepare for future opportunities. The site requires **no instructor, manager sign-off, paid platform, or third-party library** to run.

## Included files

- `index.html` — site shell, navigation, and page structure
- `styles.css` — responsive design (navy, white, teal, and gold)
- `data.js` — **editable** training content, questions, answers, explanations, role skills, and prompts
- `app.js` — scoring, portfolio generation, activity tracking, backups, and interactions

The separate `AP3_Career_Pathways_Offline.html` is also available as a **one-file version** with all the CSS and JavaScript embedded, ideal for opening in a browser or showing a freelancer.

## How to launch

1. For a quick demonstration, open `AP3_Career_Pathways_Offline.html` in a modern browser (Chrome, Edge, Firefox, Safari). The site does not need internet access.
2. For a regular website, upload the **four source files in this folder together** to any static web host (maintain filenames and directory). Open the hosted `index.html`.
3. Employees select a learning tool from the dashboard or left navigation. They answer questions and type reflections; changes save automatically on that browser/device when browser storage is permitted.
4. Each activity provides its own instructions. Results and completed tools appear in **My Career Portfolio**.
5. Employees can print the portfolio using **Print / Save as PDF** and download a `.txt` portfolio summary or `.json` backup to restore their progress later.

## All 15 interactive tools

| # | Tool | Learning experience |
|---|---|---|
| 1 | Am I Ready to Lead? | 20 self-ratings across four skill areas, growth focus and action |
| 2 | Professionalism IQ | 10 judgment scenarios with explanations and retry |
| 3 | Communication Style Finder | 12 habit ratings across clarity, listening, empathy and assertiveness |
| 4 | Say It Better! Communication Lab | 8 message rewrites, suggested responses, and employee-authored practice |
| 5 | 7-Day Accountability Challenge | Seven reflections and daily progress tracking; self-paced |
| 6 | Difficult Conversation Simulator | Five cases with two response decisions per case and feedback |
| 7 | Leadership Without a Title | Six reflection prompts and a four-week practice plan |
| 8 | Decision-Making Practice Lab | FACTS framework, five cases, and a written decision plan |
| 9 | Emotional Intelligence Self-Check | 12 habit ratings across four areas and practice recommendations |
| 10 | My Career GPS | Role exploration, suggested skills, 30/60/90-day plan |
| 11 | Monthly Career Readiness Scorecard | Eight habit ratings, history and progress graph |
| 12 | Build Your Professional Brand | Six reflections and five observable-habit commitments |
| 13 | Future Supervisor Challenge | Eight case-based leadership decisions with explanations |
| 14 | My Career Portfolio | Consolidated learning, achievements, goals and printable summary |
| 15 | Interview Confidence Builder | Three STAR story worksheets, nine questions, practice checklist |

## Employee independence

- Every assessment, quiz, reflection, decision exercise, and tool has built-in instructions.
- Scenario-based activities show **suggested responses and explanations**; they can be retried as often as needed.
- Employees can begin anywhere, stop, and return later, provided their device/browser retains data.
- No manager dashboard, approval step, automatic email, scoring alert, or employee comparison is built in.
- Scoring is **formative feedback**, not a validated psychometric instrument, employment decision, or formal competency certification.
- A completed tool means the employee has completed the self-guided activity, **not** that AP3 has evaluated their job competence or approved a promotion.

## Changing the content or design

In `data.js`:

- Change course names and descriptions in `DATA.tools`.
- Change self-check statements in `DATA.readiness`, `DATA.style`, and `DATA.ei`.
- Change quiz cases and answer keys in `DATA.professionalism`, `DATA.saybetter`, `DATA.decisions`, `DATA.conversation`, and `DATA.supervisor`.
- Change suggestions for positions in `DATA.gpsRoles`; they are examples only and should be reconciled with current AP3 job descriptions.
- Change scorecard behaviors, interview questions, and workbook prompts in their corresponding arrays.

In `styles.css`, update the theme variables at the top of the file. In `index.html`, replace the AP3 text mark with an **approved** AP3 logo if desired. If editing the one-file offline version, regenerate it from the four source files so edits remain consistent.

## Before AP3 employee rollout

1. Have operations, safety, and HR staff review learning cases for consistency with AP3 policies, DOT/FTA/FMCSA requirements as applicable, confidentiality practices, labor agreements where relevant, and the actual authority of each position.
2. Review the names and requirements of available positions, the contents of any official AP3 CARES values, and the promotion process. The role skills here are **illustrations**, not formal qualifications.
3. Confirm the intended site delivery method and have the platform owner test storage, print output, keyboard use, mobile navigation, and major supported browsers. The design is responsive, but this prototype has **not** had a formal accessibility or penetration assessment.
4. Choose a privacy approach appropriate to your workforce. Currently work is saved in unencrypted **local browser storage**, not a secure employee profile. Do not use on shared/kiosk devices for sensitive notes. Browser clearing or switching devices loses progress unless the employee exports and restores a backup.
5. If centralized login, cross-device syncing, LMS completion records, audit trails, automated completion certificates, multilingual content, or durable company-hosted employee accounts are desired, these features require a production backend and security work. None is implied by this prototype.
6. Do not treat this program as a substitute for required job training, supervisory authorization, formal discipline, or other mandatory safety/compliance programs.

## Suggested launch message

> **Your Career. Your Growth. Your Future.** AP3 Career Pathways is your own space to build communication, professionalism, decision-making, and future leadership skills. You can learn at your own pace, practice workplace scenarios, save your personal goals, and build a portfolio of your progress. No manager approval is needed to use the learning tools. Your participation does not promise a future job or change official performance standards.

## Quality checks completed

- JavaScript syntax checks passed.
- All 15 modules rendered with sample state in an isolated JavaScript test harness.
- A complete simulated learner journey achieved 15 of 15 completions and generated a portfolio summary.
- This was not an end-to-end test in all production browsers; perform a real-browser pilot before organization-wide deployment.
