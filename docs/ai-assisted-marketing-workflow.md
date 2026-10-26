# AI-Assisted Product Marketing: From Research to Revenue

**Portfolio case study by Surya Sharma**  
**Scope:** IBM product-marketing workstreams + Jio Finance lifecycle marketing workstreams  
**Classification:** Retrospective workflow demonstration / portfolio exercise, created in October 2026

> **Important distinction:** The experience and outcomes below are drawn from my CV. The AI-assisted steps and prompt examples are a demonstration of how I would augment these workstreams with AI; they are not a claim that AI tools were used during the original IBM or Jio Finance work. No confidential IBM/Jio material or customer-level data is included.

## The point of the exercise

I have worked across the full path from technical-product research to launch content, sales enablement, customer storytelling and lifecycle campaigns. This exercise demonstrates how I would use AI as a structured co-pilot across that path—speeding up synthesis and generation while keeping evidence, product truth, customer privacy and human approval in control.

**Operating principle:** AI accelerates the first draft; source material establishes what is true; subject-matter experts approve what can be said; measurement determines what works.

## 1. IBM: turn technical research into usable sales intelligence

### Starting point from my experience

As a Product Marketing Intern at IBM (April–June 2025), I worked on market and competitor intelligence across 15+ integration platforms, developed source-checked competitive messaging and sales battlecards, supported pre- and post-launch email campaigns for IWHI Global Availability, helped deliver a dedicated healthcare landing page after identifying a positioning opportunity, and supported the approval and publication of the MUDUM customer story.

### AI-assisted workflow I would use

1. **Ground the research.** Build a source pack from approved public product pages, IBM-approved collateral and directly supplied first-party sources. Give every fact a source URL, capture date and confidence label.
2. **Use AI for extraction, not truth.** Ask the model to map only explicit statements into a competitor matrix: audience, use case, capability, integration, proof, limitation and source. Missing facts should be labelled “not found,” not inferred.
3. **Human-verify the battlecard.** Check every differentiator against the source, separate fact from interpretation, and write talk tracks for specific buyer questions.
4. **Localise the story.** Convert the verified matrix into a segment-specific summary for Sales, then run a review for claim accuracy, competitive fairness and approved terminology.

**Example output specification:** a 15+ vendor matrix, a one-page executive summary, a battlecard with “when asked / explore / say / do not claim,” and a source appendix. The artifact is useful because it is traceable—not because it was generated quickly.

### AI-assisted launch-email workflow

For the IWHI Global Availability pre- and post-launch email workstream, I would use AI to generate message directions and subject-line variants from an approved launch brief. The model would not invent availability regions, features, customer outcomes or launch dates.

**Brief inputs:** audience; problem/use case; approved capability statements; launch timing; CTA; exclusions; legal/product wording; audience segment.

**Draft outputs:** three subject-line approaches, preheader options, two email body structures, CTA alternatives and a review checklist. Product Marketing and the relevant Product, Sales, Demand, Content and Web Strategy stakeholders would decide what proceeds.

### AI-assisted healthcare landing-page workflow

The experience listed on my CV includes identifying a healthcare positioning gap (healthcare represented about 20% of IWHI business) and delivering a dedicated landing page with industry experts and technical product managers. In a repeatable AI-assisted workflow, I would:

- synthesise only approved research and SME notes into a **problem / desired outcome / proof / objection** matrix;
- draft two message hierarchies for review, not publish-ready claims;
- map each proposed claim to an evidence source and a named approver;
- create a landing-page outline with a clear hero, use-case sections, proof module and CTA;
- route technical, legal and customer-proof claims to the right reviewers before copy goes live.

### AI-assisted customer-story workflow

For a customer story such as MUDUM, AI can help organise approved interview notes into a draft narrative structure: context, challenge, approach, implementation and outcome. Quotes should be copied exactly from an approved source; numbers must retain their definition and context; and no unrecorded benefit should be inferred. Customer Success and Account Executives remain responsible for fact-checking and customer approval.

## 2. Jio Finance: increase relevance without losing control

### Starting point from my experience

At Jio Finance, my CV records cohort-level push campaigns across an approximately 4 lakh customer base, CTR increasing from 0.65% to about 2.5%, a 20% lift in product-detail-page visits confirmed through A/B and control-group tests, growth in monthly in-app credit-card landing-page visits from about 80K to 1.7 lakh, and lifecycle work across WhatsApp, SMS and RCS. I also worked with propensity-led re-churn journeys and stage-specific automation in CleverTap, contributing to about 10% higher conversions.

**These are the CV-reported outcomes of the marketing work; this case study does not attribute them to AI.**

### AI-assisted campaign workflow I would use

1. **Start with a campaign brief.** Supply the approved offer, target cohort definition, channel, customer stage, CTA, terms and restrictions—not personal or account-level customer data.
2. **Generate variants against a clear hypothesis.** Ask for message routes such as value clarity, convenience, urgency only where genuine, and use-case relevance. Each variant must make one primary argument.
3. **Apply channel and compliance checks.** Validate character limits, required disclosures, offer expiry, eligibility wording, link destinations and opt-out rules. A human owner approves each message.
4. **Test one meaningful difference.** Keep the target audience and delivery conditions comparable; define CTR and downstream conversion before launch; preserve a control group where practical.
5. **Feed learning back into the brief.** Compare results by cohort and funnel stage, then distinguish a copy effect from offer, timing, eligibility or channel effects.

### Illustrative copy matrix (not published campaign copy)

| Context | Message direction | Example draft | What must be verified |
|---|---|---|---|
| Approved zero-forex offer | Lead with a concrete use case | “Planning an international spend? Explore the eligible card offer and check the terms before you apply.” | Exact eligible card, offer terms, fees and CTA destination |
| Big Billion Days / shopping moment | Relevance before urgency | “Shopping during the sale? Compare the card benefits available to you before checkout.” | Which card, benefit, eligibility and date window apply |
| Re-churn / incomplete journey | Reduce friction, do not pressure | “Still exploring your card options? Pick up where you left off and review the next step.” | Journey state, expiry, eligibility and whether resumption is supported |

These examples intentionally avoid promising approval, guaranteed savings or eligibility. An AI-generated version would only be a candidate; the approved offer brief and final compliance review determine what can be sent.

## 3. Reusable prompt patterns

### Prompt A — evidence-grounded competitor synthesis

> Using only the attached approved source pack, create a competitor comparison with columns for audience, use case, explicitly stated capabilities, proof, limitations, source URL, date checked and confidence. Do not use general knowledge to fill gaps. When evidence is missing or contradictory, write “verify” and explain what source would resolve it. Separate sourced fact from interpretation. Then suggest three sales-discovery questions; do not claim our product is superior without evidence.

### Prompt B — launch email variants

> Use only the approved launch brief below. Produce three subject/preheader combinations and two email structures for the specified audience. Preserve product terminology exactly. Do not invent features, availability, customer outcomes, dates or numbers. For each variant, state the message hypothesis and the source supporting its main claim. Flag any missing information rather than filling it in.

### Prompt C — lifecycle campaign variants

> Create six push/SMS copy variants for the provided non-sensitive cohort description and approved offer. Keep one main idea per variant. Do not imply guaranteed approval, eligibility, savings or urgency unless explicitly present in the offer terms. Return a table with copy, hypothesis, intended customer need, CTA, assumptions to verify and compliance risks. Do not request or expose personal data.

### Prompt D — customer-story outline

> Turn these approved notes into a customer-story outline. Use only outcomes and quotations present in the notes; preserve metric definitions and dates; distinguish direct quotation from paraphrase; flag every claim that needs customer, Customer Success, Product or Legal approval. Do not infer causality from correlation.

## 4. Measurement framework

| Layer | What I would measure | Why it matters |
|---|---|---|
| Efficiency | Time from brief to first reviewable draft; number of review cycles | Checks whether AI saves time without creating review debt |
| Quality | Source coverage; unsupported-claim rate; reviewer acceptance rate | Ensures content remains accurate and usable |
| Adoption | Sales usage of battlecards; email / landing-page engagement | Shows whether assets are actually used |
| Campaign outcome | CTR, product-detail-page visits, downstream funnel conversion | Measures relevance and business impact, not just copy volume |
| Safety | Privacy incidents, compliance exceptions, misstatement corrections | Keeps workflow risk within acceptable limits |

I would set baselines before introducing the workflow and compare like with like. AI use alone is not a success metric; quality and measurable audience impact are.

## 5. Guardrails

- Use only approved material in approved tools; never paste personal customer data, confidential customer notes, unreleased product details or credentials into an unapproved model.
- Treat model output as unverified draft text. Every product, competitor, offer, technical and customer claim needs an evidence source and an owner.
- Preserve human approval for customer stories, launch copy, regulated/financial-services messages and external competitive claims.
- Maintain version history and record the source, prompt, reviewer and final decision for important assets.
- Never attribute historic KPI improvement to AI unless a valid evaluation isolated AI's contribution.

## How I would explain this to a hiring manager

“My experience connects technical research, positioning, customer stories, launch content and lifecycle performance. This case study shows how I would apply AI across those workstreams: use it to synthesise sourced information and generate controlled variants, keep human review over product truth and customer trust, then measure asset quality and campaign outcomes. The Jio metrics shown are the results from my marketing work, not AI-attributed results.”

---

**Portfolio note:** This is an independently created workflow demonstration based on the workstreams and outcomes described in my CV. It does not contain proprietary IBM or Jio assets and does not claim that the AI workflows described here were used in the original roles.