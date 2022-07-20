module.exports = {
  sidebar: [
    "introduction",
    "how-it-works",
    {
      type: 'category',
      label: 'Backend Setup',
      collapsed: false,
      items: [
        "backend/first-factor",
        "backend/second-factor",
        "backend/protecting-api",
      ],
    },
    "frontend-custom",
    {
      type: 'category',
      label: 'Using pre-built UI',
      items: [
        "pre-built-ui/init",
        "pre-built-ui/showing-login-ui",
        "pre-built-ui/changing-does-session-exist",
        "pre-built-ui/second-factor-logout"
      ],
    },
  ]
};