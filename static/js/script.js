let download_links = {
  Windows: "https://github.com/spyglass-search/spyglass/releases/download/v2023.4.1/Spyglass_23.4.1_x64_en-US.msi",
  macOS: "https://github.com/spyglass-search/spyglass/releases/download/v2023.4.1/Spyglass_23.4.1_universal.dmg",
  Linux: "https://github.com/spyglass-search/spyglass/releases/download/v2023.4.1/spyglass_23.4.1_amd64.AppImage",
  unknown: "https://docs.spyglass.fyi/install.html"
};

window.addEventListener("load", function () {
  document
    .querySelector("#showMenu")
    .addEventListener("click", function (event) {
      document.querySelector("#mobileNav").classList.remove("hidden");
    });

  document
    .querySelector("#hideMenu")
    .addEventListener("click", function (event) {
      document.querySelector("#mobileNav").classList.add("hidden");
    });

  document
    .querySelectorAll("#mobileNav .nav-link")
    .forEach((node) => node.addEventListener("click", function (event) {
      document.querySelector("#mobileNav").classList.add("hidden");
    }));

  // Update download links based on detected os
  update_download_links();
});

function update_download_links() {
  const os = detect_os();
  const link = download_links[os];
  const matches = document.querySelectorAll("a[data-link='download']");
  matches.forEach(match => {
    match.setAttribute('href', link);
    if (os != "unknown" && match.getAttribute('data-update') != "false") {
      match.innerHTML = `Download for ${os}`
    }
  });
}

function detect_os() {
  const user_agent = navigator.userAgent.toLowerCase();
  if (user_agent.indexOf("windows") != -1) {
    return "Windows";
  }

  if (user_agent.indexOf("mac") != -1) {
    return "macOS";
  }

  if (user_agent.indexOf("linux") != -1) {
    return "Linux";
  }

  return "unknown";
}