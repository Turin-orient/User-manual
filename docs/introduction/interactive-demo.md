---
id: interactive-demo
title: Interactive Effects Demo
sidebar_label: Interactive Demo
---

import InteractiveCard from '@site/src/components/InteractiveCard';
import ScrollReveal from '@site/src/components/ScrollReveal';

# Interactive Effects Demo

This page demonstrates the Antigravity-style interactive effects implemented in the documentation.

## 🎨 Background Effects

You should notice:
- **Animated particles** floating in the background that respond to your mouse
- **Mouse trail** effect following your cursor
- **Gradient mesh** that slowly moves and shifts colors

<ScrollReveal animation="fade-up">

## 🎴 Interactive 3D Cards

Hover over these cards to see the 3D tilt effect:

<InteractiveCard className="interactive-card" style={{ marginBottom: '20px' }}>

### Card 1: Getting Started
Move your mouse over this card to see it tilt in 3D! The effect responds to your mouse position.

</InteractiveCard>

<InteractiveCard className="interactive-card" style={{ marginBottom: '20px' }}>

### Card 2: User Guide
This card also has the same interactive 3D effect. Try moving your mouse around different areas of the card.

</InteractiveCard>

</ScrollReveal>

<ScrollReveal animation="fade-up" delay={0.2}>

## 📜 Scroll Reveal Animations

This section animated into view as you scrolled down! Each section can have different animation types:
- Fade up (what you just saw)
- Fade down
- Fade left/right
- Scale

</ScrollReveal>

<ScrollReveal animation="scale" delay={0.3}>

## ✨ More Examples

<div className="glow-on-hover" style={{ padding: '20px', borderRadius: '8px', border: '1px solid var(--ifm-color-primary)', marginBottom: '20px' }}>

This box has a **glow-on-hover** effect. Hover over it to see the glow!

</div>

</ScrollReveal>

<ScrollReveal animation="fade-left" delay={0.4}>

## 🎯 Performance & Accessibility

All effects are optimized for:
- ✅ **60 FPS performance** - Smooth animations using GPU acceleration
- ✅ **Accessibility** - Automatically disabled for users with "reduce motion" preference
- ✅ **Mobile-friendly** - Optimized for touch devices
- ✅ **Lightweight** - No heavy dependencies, pure CSS + JavaScript

</ScrollReveal>

---

## Try It Yourself!

1. **Move your mouse around** to see the particle background react
2. **Hover over the cards** to experience the 3D tilt
3. **Scroll up and down** to see reveal animations
4. **Toggle dark mode** (top right) to see how effects adapt

:::tip Accessibility Note
If you have "Reduce Motion" enabled in your system settings, these effects will automatically be disabled or minimized for your comfort.
:::
