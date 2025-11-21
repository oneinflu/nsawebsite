# CFA Components Responsive Fix Guide

## ✅ COMPLETED:
1. CFAHero - Fixed
2. WhyCFA - Fixed

## 🔧 REMAINING COMPONENTS TO FIX:
3. CFAProgramStructure
4. CFAEligibility  
5. CFACareerRoles
6. CFANorthStarAdvantage
7. CFAExamPattern
8. CFAGlobalSalaryMap
9. CFADecisionHelper
10. CFAFAQs

## 📋 STANDARD FIXES TO APPLY TO ALL COMPONENTS:

### 1. Section Padding
**Find:** `className="py-20`
**Replace:** `className="py-10 sm:py-16 lg:py-20`

### 2. Background Blobs (if present)
**Find:** `<div className="absolute inset-0`
**Replace:** `<div className="absolute inset-0 pointer-events-none`

**Find:** `w-72 h-72`
**Replace:** `w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72`

**Find:** `top-20 left-10`
**Replace:** `top-10 left-5`

### 3. Header Margins
**Find:** `className="text-center mb-16`
**Replace:** `className="text-center mb-8 sm:mb-12 lg:mb-16`

### 4. Heading Text Sizes
**Find:** `className="text-4xl md:text-5xl`
**Replace:** `className="text-3xl sm:text-4xl md:text-5xl`

**Find:** `mb-6"`
**Replace:** `mb-4 sm:mb-6"`

### 5. Paragraph Text Sizes
**Find:** `className="text-xl`
**Replace:** `className="text-base sm:text-lg lg:text-xl`

### 6. Grid Gaps
**Find:** `gap-16`
**Replace:** `gap-8 lg:gap-12`

**Find:** `gap-12`
**Replace:** `gap-6 lg:gap-12`

**Find:** `gap-8`
**Replace:** `gap-4 sm:gap-6 lg:gap-8`

### 7. Card Padding
**Find:** `p-8`
**Replace:** `p-4 sm:p-6 lg:p-8`

**Find:** `p-6`
**Replace:** `p-4 sm:p-5 lg:p-6`

### 8. Rounded Corners
**Find:** `rounded-3xl`
**Replace:** `rounded-2xl sm:rounded-3xl`

### 9. Icon Sizes
**Find:** `w-8 h-8`
**Replace:** `w-6 h-6 sm:w-8 sm:h-8`

**Find:** `w-6 h-6`
**Replace:** `w-5 h-5 sm:w-6 sm:h-6`

### 10. Button Centering
**Find:** LeadFormButton without className
**Add:** `className="w-full sm:w-auto mx-auto"`

### 11. Text Centering on Mobile
**Find:** Grid/Flex containers with content
**Add:** `text-center lg:text-left` to content divs

### 12. Prevent Text Overflow
**Add to long text:** `truncate` or `line-clamp-1` or `line-clamp-2`
**Add to containers:** `overflow-hidden`

### 13. Grid Responsive Columns
**Find:** `grid-cols-2 md:grid-cols-5`
**Replace:** `grid-cols-2 sm:grid-cols-3 md:grid-cols-5`

**Find:** `grid-cols-2 md:grid-cols-3`
**Replace:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`

### 14. Space Between Elements
**Find:** `space-y-8`
**Replace:** `space-y-4 sm:space-y-6 lg:space-y-8`

**Find:** `space-y-6`
**Replace:** `space-y-3 sm:space-y-4 lg:space-y-6`

### 15. Max Width Containers
**Add to cards on mobile:** `max-w-md lg:max-w-none mx-auto`

### 16. Floating Elements (Company logos, badges, etc.)
**Hide on mobile:** Add `hidden lg:block` class
**Add:** `whitespace-nowrap` to prevent text wrapping

### 17. Fallback (if !isClient) Section
Apply same responsive classes as main section

## 🎯 SPECIFIC COMPONENT NOTES:

### CFAProgramStructure:
- Fix accordion cards padding
- Make level cards responsive
- Center download CTA button

### CFAEligibility:
- Fix 2-column layout to stack on mobile
- Center modal on all screens
- Make form inputs full width on mobile

### CFACareerRoles:
- Fix role cards grid
- Make salary cards responsive
- Center all content on mobile

### CFANorthStarAdvantage:
- Fix feature grid
- Make advantage cards stack properly
- Center testimonials

### CFAExamPattern:
- Fix exam detail cards
- Make pattern visualization responsive
- Center all tables/charts

### CFAGlobalSalaryMap:
- Make map responsive or hide on mobile
- Fix salary cards grid
- Center country selector

### CFADecisionHelper:
- Fix decision tree on mobile
- Make comparison cards responsive
- Center CTA buttons

### CFAFAQs:
- Fix FAQ accordion
- Make categories responsive
- Center search/filter on mobile

## ✨ TESTING CHECKLIST:
- [ ] Mobile (320px - 767px): Single column, centered content
- [ ] Tablet (768px - 1023px): 2-3 columns, proper spacing
- [ ] Desktop (1024px+): Full layout, all features visible
- [ ] No horizontal scroll
- [ ] No text overflow
- [ ] All buttons centered on mobile
- [ ] All images/icons properly sized
- [ ] Proper spacing between sections
