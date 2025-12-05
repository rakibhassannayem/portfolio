# Animation Guide

Your portfolio site now features smooth animations using **GSAP** and **Framer Motion**!

## 🎨 What's Been Added

### Libraries Installed
- **GSAP** (GreenSock Animation Platform) - For scroll-triggered animations
- **Framer Motion** - For component-level animations and interactions

### Animated Components

#### 1. **Navbar** (`src/components/Navbar.jsx`)
- Slides down from top on page load
- Logo rotates on hover
- Navigation links scale up on hover
- Resume button has press animation

#### 2. **Hero** (`src/components/Hero.jsx`)
- Text content fades in with staggered animation
- Image floats continuously (GSAP infinite loop)
- Buttons have hover and tap animations
- Profile image scales in on load

#### 3. **About** (`src/components/About.jsx`)
- Title fades in with GSAP scroll trigger
- Paragraphs slide in from alternating sides
- Tech stack items animate in with stagger effect
- Each tech card scales and lifts on hover
- CTA button has interactive animations

#### 4. **Projects** (`src/components/Projects.jsx`)
- Section title fades in on scroll
- Project cards use GSAP scroll trigger with stagger
- Cards lift up on hover
- Project images scale on hover

#### 5. **Services** (`src/components/Services.jsx`)
- Heading animates in on scroll
- Service cards use GSAP scroll trigger
- Cards scale and lift on hover
- Icons rotate 360° on hover
- CTA button has press animation

#### 6. **Contact** (`src/components/Contact.jsx`)
- Left content slides in from left
- Form slides in from right
- Email box scales on hover
- Social icons lift on hover
- Submit button has press animation

#### 7. **Footer** (`src/components/Footer.jsx`)
- Entire footer fades in from bottom
- Navigation links scale and change color on hover
- Social icons lift and scale on hover

#### 8. **Sidebars** (`SocialSidebar.jsx` & `EmailSidebar.jsx`)
- Slide in from sides with delay
- Icons/email lift on hover
- Vertical line animates in

## 🎯 Animation Types Used

### GSAP Animations
- **Scroll Triggers**: Elements animate when scrolled into view
- **Infinite Loops**: Floating animations that repeat forever
- **Stagger Effects**: Sequential animations for multiple elements

### Framer Motion Animations
- **Initial/Animate**: Entry animations on component mount
- **whileInView**: Animations triggered when element enters viewport
- **whileHover**: Interactive hover states
- **whileTap**: Press/click feedback
- **Stagger Children**: Parent-child animation coordination

## 🚀 Running Your Site

```bash
npm run dev
```

Visit `http://localhost:5173` to see all animations in action!

## 🎨 Customization Tips

### Adjust Animation Speed
Change `duration` values in the animation configs:
```jsx
transition={{ duration: 0.6 }} // Slower
transition={{ duration: 0.3 }} // Faster
```

### Modify Delays
Adjust `delay` values for timing:
```jsx
transition={{ delay: 0.5 }}
```

### Change Animation Distance
Modify `x` or `y` values:
```jsx
initial={{ y: 50 }} // Starts 50px down
initial={{ x: -100 }} // Starts 100px left
```

### Disable Repeat Animations
Set `viewport={{ once: true }}` to animate only once (already set for most)

## 📚 Learn More

- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
