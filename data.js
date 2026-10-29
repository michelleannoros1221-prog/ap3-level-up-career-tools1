/* AP3 learning content. Review/edit with your HR and operations team before launch. */
const DATA = {
  tools:[
    {id:'readiness',name:'Am I Ready to Lead?',group:'Discover Yourself',icon:'🎯',minutes:'12–15 min',description:'A 20-question self-check, skill profile, and personal growth recommendation.'},
    {id:'professionalism',name:'Professionalism IQ',group:'Discover Yourself',icon:'✨',minutes:'10–12 min',description:'Choose the most professional response to realistic workplace situations.'},
    {id:'style',name:'Communication Style Finder',group:'Discover Yourself',icon:'💬',minutes:'8–10 min',description:'Understand your communication habits and how to strengthen them.'},
    {id:'saybetter',name:'Say It Better! Communication Lab',group:'Practice the Skills',icon:'🗣️',minutes:'12–15 min',description:'Turn difficult messages into clear, calm, and respectful conversations.'},
    {id:'accountability',name:'7-Day Accountability Challenge',group:'Practice the Skills',icon:'✅',minutes:'7 activities',description:'Build daily habits around ownership, dependability, and follow-through.'},
    {id:'conversation',name:'Difficult Conversation Simulator',group:'Practice the Skills',icon:'🤝',minutes:'15 min',description:'Practice two-step conversations and receive constructive feedback.'},
    {id:'leadworkbook',name:'Leadership Without a Title',group:'Practice the Skills',icon:'🌱',minutes:'20 min',description:'Build a personal leadership action plan while in your current role.'},
    {id:'decisions',name:'Decision-Making Practice Lab',group:'Practice the Skills',icon:'🧭',minutes:'15 min',description:'Use a repeatable framework to work through real workplace choices.'},
    {id:'ei',name:'Emotional Intelligence Self-Check',group:'Discover Yourself',icon:'🧠',minutes:'10 min',description:'Explore self-awareness, self-regulation, empathy, and resilience.'},
    {id:'gps',name:'My Career GPS',group:'Plan Your Future',icon:'🗺️',minutes:'20 min',description:'Identify your next role, skill gaps, and a practical 30/60/90-day plan.'},
    {id:'scorecard',name:'Monthly Career Readiness Scorecard',group:'Discover Yourself',icon:'📊',minutes:'5 min/month',description:'Track eight personal development habits and look for improvement.'},
    {id:'brand',name:'Build Your Professional Brand',group:'Practice the Skills',icon:'🌟',minutes:'15 min',description:'Define the reputation you want to build and your next visible habits.'},
    {id:'supervisor',name:'Future Supervisor Challenge',group:'Plan Your Future',icon:'🏆',minutes:'15–20 min',description:'Try eight coaching, fairness, service, and safety leadership cases.'},
    {id:'portfolio',name:'My Career Portfolio',group:'Plan Your Future',icon:'📁',minutes:'Ongoing',description:'Collect your wins, finished tools, goals, reflections, and next steps.'},
    {id:'interview',name:'Interview Confidence Builder',group:'Plan Your Future',icon:'🎤',minutes:'20–30 min',description:'Practice internal promotion questions and build three STAR stories.'}
  ],
  readiness:[
    ['Accountability','I follow through on promises without needing reminders.'],
    ['Accountability','I acknowledge mistakes without blaming someone else.'],
    ['Accountability','I complete tasks carefully, even when no one is watching.'],
    ['Accountability','I ask for clarification before a small issue becomes a major one.'],
    ['Accountability','I accept feedback and act on it.'],
    ['Communication','I listen until the other person finishes speaking.'],
    ['Communication','I can explain a concern clearly and respectfully.'],
    ['Communication','I adjust my message for different audiences.'],
    ['Communication','I ask useful follow-up questions instead of making assumptions.'],
    ['Communication','I keep my tone professional when frustrated.'],
    ['Professionalism','I demonstrate dependable attendance and punctuality.'],
    ['Professionalism','I treat coworkers, riders, and partners with respect.'],
    ['Professionalism','I follow safety rules even when under time pressure.'],
    ['Professionalism','I avoid gossip and stay focused on solutions.'],
    ['Professionalism','I represent AP3 positively in person and online.'],
    ['Initiative','I notice work problems and suggest practical improvements.'],
    ['Initiative','I help teammates without being asked when appropriate.'],
    ['Initiative','I stay open to learning new skills.'],
    ['Initiative','I prepare before asking for new responsibilities.'],
    ['Initiative','I make good decisions within my authority and know when to escalate.']
  ],
  professionalism:[
    {q:'A teammate complains about management in front of others. You agree with some of the concerns. What should you do?',options:['Add your own complaints so they feel supported.','Listen briefly, avoid gossip, and suggest a respectful channel for specific concerns.','Post the conversation in a team group chat.'],correct:1,why:'Professionalism means addressing concerns through constructive, appropriate channels rather than spreading frustration.'},
    {q:'You realize you may arrive late for your assigned shift. What is the best first step?',options:['Notify the appropriate supervisor or dispatch contact promptly using the required call-out process.','Wait to see whether anyone notices.','Ask a friend to sign you in.'],correct:0,why:'Early, accurate communication helps coverage and shows accountability. Follow AP3 attendance and notification procedures.'},
    {q:'A customer or rider speaks sharply to you. How do you respond?',options:['Match their tone so they know you are serious.','Ignore the person entirely.','Stay calm, acknowledge the concern, explain what you can do, and follow safety/escalation procedures.'],correct:2,why:'Respectful boundaries and calm, clear communication preserve service and safety.'},
    {q:'You made a small error that another employee might discover. What is the strongest response?',options:['Correct what you can, notify the appropriate person, and share what you will change.','Tell the coworker the error was their fault.','Hide it because the outcome was not serious.'],correct:0,why:'Owning mistakes and promptly communicating their impact builds trust.'},
    {q:'A colleague offers a shortcut that skips an established safety step. What should you do?',options:['Use it if the schedule is running behind.','Decline the shortcut, follow the required safety procedure, and report any unsafe situation.','Let the colleague handle it so it is not your responsibility.'],correct:1,why:'Safety is nonnegotiable. A schedule or service goal never justifies bypassing safety rules.'},
    {q:'You disagree with a new procedure. Your first response should be to:',options:['Tell everyone the new procedure is pointless.','Ignore the rule until someone explains why it exists.','Follow the procedure, ask respectful clarifying questions, and offer a specific improvement idea through the proper channel.'],correct:2,why:'Respectful disagreement can coexist with compliance and constructive suggestions.'},
    {q:'Someone sends a work-related message containing private rider information. What is most appropriate?',options:['Forward it to coworkers for advice.','Keep information within authorized systems and personnel and follow privacy/reporting requirements.','Take a screenshot for your personal records.'],correct:1,why:'Protect private information and follow AP3 confidentiality requirements. Do not copy sensitive rider details into training exercises.'},
    {q:'You are given feedback that feels unfair. What is a professional response?',options:['Ask for specific examples, listen, and decide what actions are appropriate.','Interrupt to prove the feedback is wrong.','Refuse to discuss it.'],correct:0,why:'You can advocate for yourself while staying curious, respectful, and specific.'},
    {q:'You have finished your immediate assignment and have capacity to help. What demonstrates initiative?',options:['Actively change someone else’s assignment without asking.','Wait silently until the next shift.','Check for useful work you are authorized to do and offer appropriate assistance.'],correct:2,why:'Initiative includes recognizing boundaries, priorities, and where you can add value.'},
    {q:'An upset coworker wants an immediate answer you are not authorized to give. You should:',options:['Promise an outcome to make them feel better.','Explain what you know, avoid making commitments outside your authority, and direct them to the right person.','Invent a likely explanation.'],correct:1,why:'Credibility requires accuracy, limits, and appropriate escalation.'}
  ],
  style:[
    ['Clarity','I organize what I want to say before difficult conversations.'],['Clarity','I explain next steps instead of assuming everyone understands.'],['Clarity','I choose direct, specific language rather than hints.'],
    ['Listening','I can summarize what another person told me before responding.'],['Listening','I ask questions when a message is unclear.'],['Listening','I give speakers my full attention without multitasking.'],
    ['Empathy','I consider how my words may affect someone else.'],['Empathy','I recognize that others may be facing pressures I cannot see.'],['Empathy','I acknowledge concerns before jumping to solutions.'],
    ['Assertiveness','I can say no respectfully when needed.'],['Assertiveness','I can raise safety or work concerns even when the conversation is uncomfortable.'],['Assertiveness','I share my perspective without attacking the other person.']
  ],
  saybetter:[
    {bad:'“That’s not my job. Figure it out.”',prompt:'A coworker asks for help with a task outside your responsibility.',options:['“Not my problem.”','“I’m working on another priority, but I can point you to the right person.”','“You should have learned this already.”'],correct:1,why:'Sets a respectful boundary and offers a constructive next step.'},
    {bad:'“You never listen to anything I say!”',prompt:'You feel that your input has been overlooked.',options:['“Could I share one concern and ask how we can address it?”','“Everyone knows you ignore me.”','“Forget it. I’m not talking.”'],correct:0,why:'Uses a specific request instead of blame or absolutes.'},
    {bad:'“You messed up my whole route.”',prompt:'A dispatch change is creating confusion.',options:['“I’m done with these changes.”','“This is the worst schedule ever.”','“I see a change to my assignment. Can we confirm the updated details and priorities?”'],correct:2,why:'Focuses on facts and what is needed to complete work safely.'},
    {bad:'“Calm down! You’re being ridiculous.”',prompt:'A rider or customer expresses frustration.',options:['“I can hear that this has been frustrating. Let me explain what I can do.”','“You have no reason to be upset.”','“I will talk when you stop complaining.”'],correct:0,why:'Acknowledges a feeling without arguing over whether it is justified.'},
    {bad:'“Nobody told me, so it’s not my fault.”',prompt:'An assignment detail was missed.',options:['“That’s on whoever scheduled it.”','“I missed that information. Here is what I know; can we confirm the next step?”','“Well, too late now.”'],correct:1,why:'Moves from blame to responsibility and clarification.'},
    {bad:'“I’m not doing it your way.”',prompt:'A colleague suggests a different approach.',options:['“Your way makes no sense.”','“I’ll do whatever you say even if it conflicts with policy.”','“Let’s compare the options and make sure we follow the required procedure.”'],correct:2,why:'Shows openness while keeping safety and procedures in view.'},
    {bad:'“You always make excuses.”',prompt:'You need to address a repeated missed handoff.',options:['“The last two handoffs were delayed. What can we do to make the next one on time?”','“You clearly don’t care.”','“Everyone is tired of you.”'],correct:0,why:'Uses observable behavior and a solution-oriented question.'},
    {bad:'“Whatever. I don’t care anymore.”',prompt:'You feel overwhelmed after a disagreement.',options:['“This is pointless.”','“I need a short moment to collect my thoughts, and then I can discuss next steps.”','“Fine. You win.”'],correct:1,why:'Allows a respectful pause and a plan to resume communication.'}
  ],
  accountability:[
    ['Day 1 — Own It','Identify one situation where you could take more ownership. What will you do differently?'],
    ['Day 2 — Follow Through','Select one realistic promise or task. Complete it and record how you followed through.'],
    ['Day 3 — Communicate Early','Practice giving a timely update about a task, question, or barrier. What happened?'],
    ['Day 4 — Request Feedback','Reflect on a piece of feedback you received or create one specific question to ask in the future.'],
    ['Day 5 — Solve, Don’t Blame','Write a solution-focused response to a frustrating workplace situation.'],
    ['Day 6 — Raise the Standard','Choose one professional habit you want to demonstrate more consistently.'],
    ['Day 7 — Commit to Growth','Reflect on the week. What habit will you maintain for the next 30 days?']
  ],
  conversation:[
    {title:'A coworker interrupts you',context:'During a team handoff, a coworker repeatedly speaks over you.',first:['“You’re always rude. Stop talking.”','“I want to finish this update, then I’d like your perspective.”','Stop participating and leave the handoff.'],good:1,why:'Requests the space to speak without insulting the person.',second:['“I hear your point. Can we agree to let each person finish during handoffs?”','“You obviously do this on purpose.”','“Never mind. It doesn’t matter.”'],secondGood:0,secondWhy:'States a clear and fair expectation for future interactions.'},
    {title:'You missed an important task',context:'A coworker says your unfinished work delayed their start.',first:['“Someone should have reminded me.”','“You’re overreacting.”','“I missed the deadline and understand that affected you. I’m sorry.”'],good:2,why:'Acknowledges the impact without becoming defensive.',second:['“But you also make mistakes.”','“I will finish the handoff by the agreed time and use a checklist going forward.”','“It probably won’t happen again.”'],secondGood:1,secondWhy:'Pairs ownership with a clear corrective action.'},
    {title:'A passenger is frustrated',context:'A passenger is upset about a service delay. You must remain focused on safety and your authorized role.',first:['“I understand the delay is frustrating. I can share what I know and contact dispatch as needed.”','“Not my issue. Call somebody else.”','“I promise you will never have to wait again.”'],good:0,why:'Acknowledges concerns without making unauthorized promises.',second:['“You need to be more patient.”','“I will ignore the procedure to make this up to you.”','“Here is the current information. I’ll follow the required process for updates.”'],secondGood:2,secondWhy:'Explains an appropriate next step while maintaining policy and safety.'},
    {title:'A new process is confusing',context:'You need clarification from a team leader, but the team is busy.',first:['“Nobody ever explains anything.”','“I want to make sure I follow the new process correctly. Can I confirm these two steps?”','Make up your own procedure.'],good:1,why:'Offers a precise, respectful request.',second:['“Thanks. I’ll summarize what I heard so I can get it right.”','“Whatever. I still disagree.”','“I will ask everyone until I get a different answer.”'],secondGood:0,secondWhy:'Checking understanding prevents repeat errors.'},
    {title:'You receive critical feedback',context:'A peer points out an error in your handoff.',first:['“I appreciate you telling me. Could you show me exactly where the information was missing?”','“Your handoffs are bad too.”','“I don’t accept feedback from peers.”'],good:0,why:'Asks for usable details instead of reacting defensively.',second:['“This is all your fault.”','“You can fix it for me from now on.”','“I’ll correct that detail now and add a check before my next handoff.”'],secondGood:2,secondWhy:'Transforms feedback into a measurable improvement.'}
  ],
  leadPrompts:[
    ['Lead by Example','Which two behaviors do you want teammates to see consistently from you?'],
    ['Exercise Judgment','Describe a situation where you should solve a problem independently—and one you should escalate.'],
    ['Accept Responsibility','How will you react differently the next time you receive constructive feedback?'],
    ['Demonstrate Initiative','What is one small improvement you can make within your authority?'],
    ['Support Your Team','How can you help others without taking over their responsibilities?'],
    ['Make It Visible','What evidence would show that you are ready for added responsibility?']
  ],
  decisionFramework:[['F','Find the facts','What do you know for certain? What information is missing?'],['A','Assess your options','List realistic actions you are authorized to take.'],['C','Consider consequences','Which choice best protects people, service, fairness, and policy?'],['T','Talk or escalate','Whom should you contact if the decision exceeds your authority?'],['S','Select and study','Choose the best next step. Afterward, what can you learn?']],
  decisions:[
    {title:'Schedule pressure versus safety',context:'You are running late and a coworker suggests skipping a required safety check.',options:['Skip it once and explain later.','Follow the required safety procedure and promptly communicate the delay.','Ask someone to mark it complete without checking.'],correct:1,why:'Required safety checks must be completed; timely communication is the appropriate response to delays.'},
    {title:'Conflicting instructions',context:'You receive instructions from two colleagues that appear inconsistent with the current procedure.',options:['Select whichever is quicker.','Ignore both and improvise.','Check the documented process and ask an authorized lead for clarification.'],correct:2,why:'Verify facts and authority rather than guessing.'},
    {title:'Peer needs help',context:'A coworker asks you to abandon an assigned task to assist with something less urgent.',options:['Clarify priorities and offer help if it does not compromise existing responsibilities.','Leave your task unfinished immediately.','Say no without listening.'],correct:0,why:'Balance teamwork with responsibility and priority.'},
    {title:'Confidential information',context:'Someone asks you for rider information they are not authorized to access.',options:['Provide it as a favor.','Decline to share it and direct them to the approved channel.','Share a little information instead.'],correct:1,why:'Maintain confidentiality, approved access, and appropriate escalation.'},
    {title:'A service recovery suggestion',context:'You have an idea to reduce confusion at a pickup, but it changes the usual process.',options:['Implement it immediately without discussing it.','Do nothing because improvement is never your role.','Write down the idea and recommend it through the appropriate review channel.'],correct:2,why:'Good initiative respects the limits of your role and established operating procedures.'}
  ],
  ei:[
    ['Self-awareness','I notice when frustration begins affecting my tone.'],['Self-awareness','I can name the emotion I am experiencing at work.'],['Self-awareness','I recognize situations that commonly trigger defensiveness.'],
    ['Self-regulation','I pause before answering when I am upset.'],['Self-regulation','I can redirect my attention to the task after a stressful interaction.'],['Self-regulation','I remain respectful even when someone else is not.'],
    ['Empathy','I consider a coworker’s perspective before judging their intent.'],['Empathy','I notice signs that someone needs a clearer explanation.'],['Empathy','I validate concerns without automatically agreeing with every claim.'],
    ['Resilience','I can recover from setbacks without giving up on the day.'],['Resilience','I use healthy ways to reset after difficult interactions.'],['Resilience','I learn from mistakes instead of dwelling on them.']
  ],
  gpsRoles:{
    'Lead Driver / Peer Trainer':['Strong safety and service record','Clear communication and patience','Ability to demonstrate skills and explain procedures','Positive role modeling'],
    'Road Supervisor':['Field observations and coaching','Safety and policy knowledge','Calm decision-making','Documentation and professional communication'],
    'Lead Dispatcher':['Dispatch workflow and prioritization','Accurate handoffs and documentation','De-escalation and communication','Team coordination'],
    'Operations Supervisor':['Coaching and accountability','Operational problem-solving','Scheduling and service decisions','Clear documentation and escalation'],
    'Administrative / HR Support':['Confidentiality and accuracy','Customer service and written communication','Digital organization and follow-through','Basic policy and compliance knowledge'],
    'Other / My own path':['Core role-specific competencies','Communication and professionalism','Dependability and good judgment','Continuous learning']
  },
  scorecard:['Dependability and punctuality','Professional communication','Listening and teamwork','Safety and policy adherence','Accountability','Problem-solving','Initiative and learning','Respectful response to feedback'],
  brandPrompts:[
    ['reputation','How do you want people to describe working with you?'],
    ['strengths','List three strengths you bring to AP3.'],
    ['values','Which professional values guide your decisions?'],
    ['gap','Which habit could undermine the reputation you want?'],
    ['action','What visible behavior will you demonstrate this week?'],
    ['introduction','Write a 30-second introduction describing the employee you are becoming.']
  ],
  supervisor:[
    {q:'An experienced employee repeatedly skips a required safety step. What is the best approach?',options:['Ignore it because their performance is usually good.','Address the unsafe behavior promptly, follow reporting procedures, document facts, and involve the proper authority.','Privately ask them to be more careful without further action.'],correct:1,why:'Safety concerns require prompt action under AP3 procedures, appropriate documentation, and authorized escalation.'},
    {q:'Two employees disagree about work distribution. Your first step is to:',options:['Hear relevant facts and perspectives and apply a consistent, fair standard.','Immediately side with the more senior employee.','Tell them to work it out without guidance in every case.'],correct:0,why:'Fair leaders gather facts and use transparent criteria.'},
    {q:'An employee asks a question you cannot answer accurately. What should you do?',options:['Make a confident guess.','Promise you will approve whatever they need.','Explain that you will verify the answer with the appropriate person or policy and follow up.'],correct:2,why:'Leaders earn trust by acknowledging the limits of their authority and knowledge.'},
    {q:'A normally reliable employee has two recent late arrivals. What is the best initial coaching posture?',options:['Publicly criticize them to set an example.','Privately discuss the specific facts, understand barriers, and apply AP3 policy consistently.','Assume they are no longer committed.'],correct:1,why:'Effective coaching is private, specific, fair, and consistent with policy and relevant legal protections.'},
    {q:'A team member challenges your decision respectfully. A strong supervisor should:',options:['Listen, explain the reasoning or constraints, and revise if warranted.','Treat any disagreement as insubordination.','Avoid discussing it at all.'],correct:0,why:'Being open to input builds trust while preserving accountability.'},
    {q:'A teammate shares sensitive personnel information. What is appropriate?',options:['Use it as a teaching example with names included.','Tell the entire team so they know what happened.','Protect confidentiality and direct concerns through appropriate HR/leadership channels.'],correct:2,why:'Personnel matters should be handled by those with a legitimate need to know.'},
    {q:'A service problem occurs. How should a supervisor describe it?',options:['Use observable facts, separate what is known from assumptions, and identify next steps.','Describe the person involved as lazy or careless.','Start with blame so others know you are in charge.'],correct:0,why:'Fact-based communication improves corrective action and fairness.'},
    {q:'You want to recognize someone for good work. The most effective feedback is:',options:['Generic praise only: “Good job.”','Specific, timely feedback describing the behavior and its positive impact.','Praise only your personal friends.'],correct:1,why:'Specific recognition reinforces desired behaviors and builds an equitable team culture.'}
  ],
  interviewQuestions:[
    ['Tell me about yourself.','Connect your current role, proven strengths, and why this opportunity is the right next step.'],
    ['Why are you ready for additional responsibility?','Offer specific examples of dependability, initiative, communication, and continuous learning.'],
    ['Tell me about a mistake you made.','Use STAR to demonstrate accountability, corrective action, and learning.'],
    ['Describe a difficult coworker conversation.','Describe respectful communication, what you controlled, and the outcome.'],
    ['How do you handle feedback?','Explain how you seek clarification, act on suggestions, and measure improvement.'],
    ['Give an example of a safety-first decision.','Describe how you followed safety procedures even when challenged by time or pressure.'],
    ['How would you coach someone struggling with a task?','Discuss clear expectations, empathy, practice, observation, and knowing when to escalate.'],
    ['Tell me about a time you improved a process.','Focus on a problem you noticed, the approved change, and the measurable or observable result.'],
    ['What are your professional development priorities?','Identify one specific skill gap and an action plan with a timeline.']
  ]
};
