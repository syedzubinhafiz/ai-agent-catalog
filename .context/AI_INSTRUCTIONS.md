# AI Instructions - Aegis Framework

## Project Context
AI Agent Catalog - Next.js application with TypeScript, Redux, Shadcn UI, and Framer Motion.

## Framework Rules
- Use .context/ (with dot) for all framework files
- Use mv (not cp) for task transitions
- Update front matter after task moves
- Use current year (2025) for all timestamps
- Use exact current time format: YYYY-MM-DDTHH:MM:SS

## Task Management
- Tasks start in .context/tasks/planned/
- Move to .context/tasks/active/ when starting work
- Move to .context/tasks/completed/ when finished
- Update status and timestamps during transitions

## Implementation Priorities
1. **Phase 1 (Tonight - 50%)**: Foundation and SSR
2. **Phase 2 (Tomorrow)**: Filtering, animations, deployment
3. **Optional**: Google OAuth (if time permits)

## Critical Success Factors
- SSR working with agent data visible in page source
- All filtering functionality operational
- Responsive design across devices
- Clean, maintainable TypeScript code
- Deployed to Vercel with live URL

## Technical Constraints
- Must use Next.js App Router (not Pages Router)
- TypeScript strict mode required
- Server Components for SSR, Client Components for interactivity
- Modular architecture for easy OAuth integration 