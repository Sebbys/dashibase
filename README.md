<p align="center">
<img width="300" src="https://raw.githubusercontent.com/dashibase/dashibase/main/assets/dashibase-logo.png"/>
</p>

# Dashibase

**[Dashibase](https://dashibase.com) is a no-code tool to build user dashboards supported by Supabase.**

This repo contains the open-source code for setting up your own Dashibase dashboard if you are interested in hosting it yourself.

Contributions welcome!

---

## Features

This is a work-in-progress but the following features are already supported.

- [x] Authentication UIs including sign in and sign up - currently with email and password, third-party provider support coming soon
- [x] Multiple display modes - [`single`](https://dashibase.com/demo/profile), [`list`](https://dashibase.com/demo/todo), [`card`](https://dashibase.com/demo/notes)
- [x] CRUD functions
- [x] Simple form validation during item creation by checking that required fields are filled in (required attributes are configured in `src/dashibaseConfig.ts`)
- [x] Caching of dashboard data to reduce database queries and improve latency
- [x] Dashboard is responsive and works on tablet and mobile

![Dashibase Dashboard](https://raw.githubusercontent.com/dashibase/dashibase/main/assets/dashibase-screenshot.png)

**Have suggestions for what to work on next? Support us by joining our [beta](https://dashibase.com)!**

## Getting Started

1. Clone this repository and go to the Dashibase directory

```bash
git clone https://github.com/dashibase/dashibase
cd dashibase
```

2. Open `src/dashibaseConfig.ts` to configure your dashboard.

See [here](https://github.com/dashibase/dashibase/blob/main/src/dashibaseConfig.ts) for documentation on the config file.

3. Test it locally - we currently don't have a staging mode yet but you should be able to test it with your own account

```bash
npm run dev
```

4. Deploy to your favorite server!

Remember to add your dashboard URL to your list of your sign-up redirect URLs in Supabase.

You can find it at https://app.supabase.io/project/YOUR_PROJECT_ID/auth/settings
