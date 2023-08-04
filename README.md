# 力泰 RTS (Retain to Sustain) Official Website

![CleanShot 2023-08-02 at 17 02 52@2x](https://github.com/xJkit/rts-official/assets/18704345/06370add-ee26-49d9-9894-643d09671433)


# Guidelines

Please follow the following guides on this project.

# Development Guides

```
pnpm install
pnpm dev 
```

### Backend API ROOT

Check the API documentation: https://github.com/xJkit/rts-official/issues/1

## UI Framework

- React + Next.js App Router (v13.4 and later)
- TailwindCSS
- Daisy UI (optional)
    - for accordion, modal or other UIs outside of pure TailwindCSS

## Libraries

- Data fetching
    - Server Side (Default): `React Server Component` (make use of Next.js App Router) with primitive fetch function.
    - Client Side: `react-query`
- Animations
    - GSAP, react-spring, or utilize the combination of TailwindCSS class names
- Others
    - react hook form (for form validation)
    - html-react-parser (for rendering HTML content inside article page)
    - dayjs (for time formatting)
    - react-icons

## Notice

- Do not push any sensitive information like SSH key or passwords. Create an .env file instead.
- Code review is required. Please make a PR for any feature.
- Generate a preview link at certain milestones. Netlify or Vercel is okay.

## UI Design Guides

- [Figma UI spec](https://www.figma.com/file/VN9mFQZVqylxCFHabEc2jT/RTS-website-%E5%B7%A5%E7%A8%8B?type=design&node-id=0%3A1&mode=design&t=Cp4OnLk8bERR3MZp-1)

#### Website routing pattern
- /
- /about-retain-to-sustain
- /issues
    - /[slug]
- /rts-solutions
    - /monofilament-with-greater-inclusivity
    - /monofilament-with-improved-recyclability
    - /monofilament-with-more-durable-low-shedding
    - /low-carbon-footprint-monofilament
- /faq
- /contact

#### Landing Page
- Logo
    - Link to the home page route
- Banner
    - Infinite loop background video
    - Video file:
- Find out More
    - Every button are directed to another sub-route under RTS solutions (4 routes respectively)
- Latest Articles
    - Show the top 2 posts from issue.
    - The entire article card are clickable and directed to the post route
- Join Us Button
    - Show the contact form modal
- Top Navigation Bar
    - each link are directed to the corresponding route page
    - make current route  “active” with text-colored styling.
      
#### About Retain to Sustain

- Contact form
    - Follow the contact form component guide
- Visit Ri-Thai Website
    - Open new window:
- Contact Form Component
  - integrate with react hook form for field validation
  - All fields are required.
  - Email field should validate the correct email format.
  - After form submission (click the send button), the entire form card(inside the white background) will change the UI state to the success notification UI (display: Message has already been sent)
  - The light box version of contact form shows up when user click “Join Us” Button. Don’t forget to add the close icon(cross icon) at the top-right corner.
 
      
#### RTS solutions

- 4 blocks in the middle (with transparent, blurry background) are linked to the sub-route page under RTS solutions.
- The entire block is clickable.
  
#### Issues
- This is user-generated content page. You need to connect the backend CMS apis to fetch the post list.
- Render the latest 6 posts on initial page loads
    - `API` 
- Top filter tag switches
    - Tag list `API` 
    - Maximum 12 tags
    - All tags are clickable. When tag is active, it renders the underline. Click it again to toggle off to inactive status.
    - When you click one of the filter tag:
        - The clicked tag is active, the filter function is on.
        - Fetch the posts by the filter condition.
        - Click the “load more button” to append more posts.
        - Pagination: 6 posts per page (one click load more)
    - Use react-query to do the client-side data fetching.
- Posts
    - The entire post card is clickable and directed to the post page
    - Banner image:
        - Use the small size of image from the api response
    - Post related tags
        - Green color hashtag.
        - It is not a link (because the entire card is a link)
    - Title
    - Excerpt
    - Date
        - Use day.js to render the date in formatted strings
        - Conditional render: only show date string when the api field “show_date” is true.
- Load more button:
    - Append 6 posts per page
    - Hide the button when you reach the last page
    - Disable the button when entering the loading state.

#### Issues: [slug]
- connect post `API`
- Fields:
    - Tags (not link)
    - date string (use day.js to render)
    - Title
    - Banner image
    - Excerpt
    - Body
        - Use html-react-parser to render

#### faq
- accordion component
    - Use daisy ui
  
#### contact
- maps
    - Use a “image” as a clickable link
    - When user click the map image, open the new Google map window and directed to the correct destination.
