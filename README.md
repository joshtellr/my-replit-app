# My Interactive Portfolio

A full-stack personal portfolio built with **Node.js**, **Express**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
Designed to showcase my work, skills, and projects — fully self-hosted on Proxmox with Cloudflare Tunnel support.

---

## 🚀 Tech Stack

- **Frontend**: Vite, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Shared Code**: TypeScript modules across client and server
- **Hosting**: Proxmox LXC container (self-hosted)
- **Dev Tools**: Replit (original build), VS Code, GitHub

---

## 📂 Folder Structure

<pre>
my-replit-app/
├── client/         # Frontend (Vite)
├── server/         # Backend (Express API)
├── shared/         # Shared types and utilities
├── package.json    # Combined root scripts
</pre>

---

## 🛠️ Development

### Local Dev (Frontend)

```bash
cd client
npm install
npm run dev

Local Dev (Backend)

cd ..
npm install
npm run dev

Server runs on http://localhost:5000
Frontend runs on http://localhost:5173

---

🌐 Deployment

This app is hosted in a Proxmox LXC and served over the internet using a Cloudflare Tunnel.

### Quick Steps

```bash
git pull
npm install
npm run dev

---

## 📝 To-Do

- [ ] Improve homepage layout
- [ ] Add project cards + filtering
- [ ] Mobile responsiveness tweaks
- [ ] Deploy using pm2 or systemd
- [ ] Add resume download link

---

## 📸 Screenshots

Will add screenshots of the site here later!

---

## 📜 License

MIT
