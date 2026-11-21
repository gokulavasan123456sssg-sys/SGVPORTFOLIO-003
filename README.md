# GOKULAVASAN — CINEMATIC MASS PORTFOLIO WEBSITE

A world-class, premium, cinematic filmmaker and VFX artist portfolio inspired by the swagger of a classic Tamil cinema mass-hero title introduction combined with modern high-end creative agency aesthetics.

---

## 🎬 Creative & Visual Direction

- **Theme**: Tamil Cinema Mass Introduction meets Hollywood-grade Filmmaker Portfolio
- **Visual Identity**: Gokulavasan (Video Editor, Cinematographer, Photographer, Visual Effects Artist)
- **Palette**:
  - Pure Black: `#050505`
  - Deep Red: `#B50016`
  - Fiery Red: `#FF2020`
  - Burnt Orange: `#FF5A00`
  - Golden Orange: `#FF9B24`
  - White: `#FFFFFF`
- **Atmosphere**: Volumetric red & orange smoke, floating glowing embers, 2.39:1 anamorphic letterbox ratio, film grain, interactive color grading slider, synthesized Web Audio cinematic bass boom & whoosh, and director viewfinder reticle cursor.

---

## 📽️ Website Sections (Built in Exact Sequence)

1. **01 – Cinematic Hero Intro & Walking Swagger**:
   - Pure black screen opening
   - Sound toggle + letter-by-letter fiery name reveal (`GOKULAVASAN`)
   - Classic Tamil cinema slow-motion walking swagger entrance with lens flares and dramatic rim lighting
   - Smooth transition into main hero title, badges, and primary action buttons
2. **02 – About Me ("BEHIND THE CAMERA. BEYOND THE FRAME.")**:
   - Authentic filmmaker portrait & narrative summary
   - 1-Year experience spotlight at **Koyaka YouTube Channel**
   - 7 core capability pillars (Video editing, photography, cinematography, storytelling, lighting, color grading, VFX compositing)
3. **03 – My Professional Skills**:
   - Animated progress-free cards for Video Editing, Photography, Cinematography, and 3D & VFX
   - No fake percentages; clean illuminated mastery tags
4. **04 – Selected Works / Cinematic Portfolio**:
   - Filterable categories: Wedding Films, Video Editing, Cinematography, Photography, VFX & Showreels, Creative Projects
   - Full-screen video preview modal supporting YouTube, Vimeo, Google Drive previews, and direct MP4/WebM files
5. **05 – Video Editing Showcase**:
   - Interactive Before/After Color Grading slider (Flat S-Log vs. Cinematic Master Grade)
   - Narrative pacing, beat sync, and DaVinci Resolve color science breakdown
6. **06 – Cinematography Showcase**:
   - Anamorphic 2.39:1 CinemaScope frame viewer
   - Multi-point lighting setups, lens choices, and camera blocking
7. **07 – Photography Gallery**:
   - High-definition portraiture, events, and fine-art photography
   - Mechanical camera shutter sound effect on view
   - Interactive lightbox with camera EXIF metadata (f/1.8, 1/250s, ISO 100)
8. **08 – VFX Showreel**:
   - Foundry Nuke & Autodesk Maya multi-pass compositing breakdown
   - Certified professional training at **VFX Image Institution, Vadapalani, Chennai**
9. **09 & 10 – Experience & Education**:
   - **Work**: 1 Year as Video Editor, Photographer & Cinematographer at **Koyaka YouTube Channel**
   - **Education**: B.E. Cyber Security (SRM Valliammai - 74%), Diploma in Engineering (Sri Ramakrishna Polytechnic - 81%), SSLC (Vetri Vikaas), VFX Certification
10. **11 – Resume Download**:
    - Interactive online resume viewer modal
    - Direct 1-click download of official PDF resume
11. **12 – Contact Section ("LET'S CREATE SOMETHING CINEMATIC")**:
    - Direct Call (+91 9344084435)
    - Direct Email (gokulavasan123456sssg@gmail.com)
    - WhatsApp (+919344084435)
    - Studio Location (Chennai, India)
    - Social links (Instagram, YouTube, LinkedIn)
    - Interactive project transmission form

---

## 🔒 Private Admin Dashboard (`#admin` or Admin Button)

A dedicated creator control room to manage the entire website without touching code:
- **Access Route**: Click **ADMIN** in the top navigation or navigate to `#admin`
- **Default Master Key**: `cinematic2025` (also accepts `gokulavasan`)
- **Dashboard Features**:
  - **Overview**: Real-time project counts, skills, current production status
  - **Projects**: Add, edit, delete, reorder projects, change categories, upload thumbnails, add video URLs
  - **Media Vault**: Fast drag-and-drop file uploader with instant previews
  - **Categories**: Filter and organize portfolio tags
  - **Profile Editor**: Edit name, tagline, about text, avatar photo, and hero character image
  - **Skills Editor**: Manage software and tools
  - **Resume Manager**: Update download link and filename
  - **Contact Details**: Update phone, email, location, WhatsApp, Instagram, and YouTube
  - **Supabase Cloud Settings**: Direct connection to your Supabase project + 1-click SQL schema exporter

---

## ⚡ Quick Start & Local Development

### 1. Install dependencies (Already installed)
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for production
```bash
npm run build
```

---

## 🗄️ Supabase Database & Storage Setup (Optional)

The website works immediately out-of-the-box with local state caching. To connect Supabase for cross-device cloud persistence:

1. Create a free project at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase dashboard.
3. Copy the SQL script from the Admin Dashboard (**Settings -> Copy SQL Script**).
4. Run the script to create the `profile`, `projects`, `skills` tables and `portfolio-media` storage bucket.
5. In the Admin Dashboard (**Settings** tab), enter your **Supabase URL** and **Anon Key**, then click **Save & Connect**.

---

## 📂 Google Drive File Integration

To add files from your Google Drive folder:
1. Ensure the files or folder are set to **"Anyone with the link can view"**.
2. For videos, copy the preview link (e.g. `https://drive.google.com/file/d/FILE_ID/preview`).
3. Or simply upload the files directly via the **Admin Dashboard -> Projects / Media Vault** in a few clicks!
