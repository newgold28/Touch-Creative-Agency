# Touch Creative Agency Website

A premium, modern creative agency website built with Next.js 16, React, and cutting-edge technologies.

## Features

### Pages
- **Home** - Hero section with featured projects and services
- **About** - Agency story, team, and values
- **Services** - Complete service offerings with pricing
- **Portfolio/Work** - Showcase of completed projects with case studies
- **Blog** - Curated articles and insights
- **Contact** - Contact form with FAQ section
- **Newsletter** - Email subscription for updates
- **Tools** - AI-powered developer tools (Color Palette Generator)

### Technologies Used
- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, custom animations
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber
- **AI/ML**: Vercel AI SDK 6, Anthropic Claude
- **State Management**: SWR for data fetching
- **Form Handling**: React with validation
- **Database Integration**: Ready for database setup (Neon recommended)

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file in the root directory:
   ```
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── about/
│   ├── services/
│   ├── work/                 # Portfolio
│   ├── blog/
│   ├── contact/
│   ├── newsletter/
│   ├── tools/
│   ├── api/                  # API routes
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── footer.tsx            # Footer
│   ├── particle-background.tsx # Animated background
│   ├── testimonials.tsx       # Client testimonials
│   ├── stats.tsx             # Statistics counter
│   └── tools/
│       └── color-palette-generator.tsx # AI color tool
├── lib/
│   └── use-media-query.ts    # Media query hook
└── public/                   # Static assets
```

## Key Components

### Navbar
- Responsive navigation with mobile menu
- Smooth scroll animations
- Active route indicators

### Particle Background
- Canvas-based animated particle system
- Disabled on mobile for performance
- Vibrant blue theme

### Animations
- Framer Motion for component animations
- GSAP for scroll-based effects
- Custom CSS animations defined in globals.css

### AI Tools
- **Color Palette Generator**: Uses Anthropic Claude to generate color palettes based on industry and mood
- Extensible for additional AI-powered tools

## Customization

### Colors
Edit the design tokens in `app/globals.css`:
- `--primary`: Main brand color (vibrant blue)
- `--accent`: Accent color (light blue)
- `--background`: Dark background
- `--foreground`: Light text

### Typography
Fonts are configured in `app/layout.tsx`:
- Inter for body text
- Roboto Mono for code

### Adding New Pages
1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Import `Navbar`, `Footer`, and `ParticleBackground` components
4. Use motion components from Framer Motion for animations

## API Routes

### POST /api/generate-palette
Generates a color palette using AI based on industry and mood.

**Request body**:
```json
{
  "industry": "Technology",
  "mood": "Professional"
}
```

**Response**:
```json
{
  "colors": [
    {
      "name": "Primary Blue",
      "hex": "#0066FF",
      "usage": "Main brand color"
    }
  ],
  "description": "A professional tech palette...",
  "mood": "Professional"
}
```

## Performance Optimizations

- Static pre-rendering of pages
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized CSS with Tailwind
- Particle background disabled on mobile
- SWR for efficient data fetching

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in project settings
4. Deploy with one click

```bash
# Or use Vercel CLI
vercel
```

### Deploy to Other Platforms

The project is compatible with most Node.js hosting platforms:
- Netlify
- AWS Amplify
- Railway
- Heroku
- Azure App Service

## Security Notes

- Never commit `.env.local` file with secrets
- Use environment variables for all API keys
- Implement rate limiting for API routes in production
- Use HTTPS only in production
- Sanitize user inputs in forms

## Contributing

To add new features:

1. Create a new branch
2. Make your changes
3. Test locally with `pnpm dev`
4. Ensure `pnpm build` succeeds
5. Submit a pull request

## Troubleshooting

### Dev server not starting
```bash
# Kill existing process
kill -9 $(lsof -ti:3000)
# Try again
pnpm dev
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
pnpm install
pnpm build
```

### Animation performance issues
- Disable particle background on older devices
- Reduce animation complexity
- Use `will-change` CSS property sparingly
- Profile with browser DevTools

## Future Enhancements

- [ ] Database integration (Neon/Supabase)
- [ ] CMS for blog posts (Sanity/Contentful)
- [ ] Contact form backend
- [ ] Newsletter subscription service
- [ ] Advanced SEO optimization
- [ ] Analytics integration
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] E-commerce integration
- [ ] User authentication

## License

MIT - Feel free to use this project for commercial or personal use.

## Support

For questions or issues:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [React documentation](https://react.dev)
- See [Tailwind CSS docs](https://tailwindcss.com)
- Consult [Framer Motion guide](https://www.framer.com/motion)

## Contact

For inquiries about this website template or services:
- Email: hello@touchcreative.com
- Website: https://touchcreative.com

---

Built with ❤️ by Touch Creative Agency
