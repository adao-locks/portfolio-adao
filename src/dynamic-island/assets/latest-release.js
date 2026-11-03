// Aponta os botões de download para a versão mais recente publicada no GitHub.
// Se a consulta falhar (sem internet, limite da API), os links escritos no HTML continuam valendo.
(() => {
  if (document.documentElement.dataset.preview === "1") return;

  fetch("https://api.github.com/repos/adao-locks/DynamicIsland-releases/releases/latest", {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then(response => (response.ok ? response.json() : null))
    .then(release => {
      const installer = release?.assets?.find(asset => asset.name.endsWith(".exe"));
      if (!installer) return;

      document.querySelectorAll(".download-link").forEach(link => { link.href = installer.browser_download_url; });
      document.querySelectorAll("[data-release-file]").forEach(el => { el.textContent = installer.name; });
      document.querySelectorAll("[data-release-version]").forEach(el => { el.textContent = release.tag_name.replace(/^v/, ""); });
    })
    .catch(() => {});
})();
