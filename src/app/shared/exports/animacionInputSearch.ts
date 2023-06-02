export class animacionSearch {
  static animacionSearch() {
    const containerSearch = document.querySelector(
      '.container-search'
    ) as HTMLInputElement;
    containerSearch.style.width = '100%';
    const cerrarInputSearch = document.querySelector(
      '.cerrarInputSearch'
    ) as HTMLAnchorElement;
    cerrarInputSearch.style.display = 'block';

    const inputSearch = document.querySelector(
      '#inputSearch'
    ) as HTMLInputElement;
    inputSearch.style.width = '100%';
    inputSearch.style.borderBottomColor = 'var(--ColorSecundario)';

    const containerFiltros = document.querySelectorAll('.filtro');

    containerFiltros.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.display = 'none';
      }
    });
  }

  static cerrarAnimacioneSearch() {
    const cerrarInputSearch = document.querySelector(
      '.cerrarInputSearch'
    ) as HTMLAnchorElement;
    cerrarInputSearch.style.display = 'none';
    const containerSearch = document.querySelector(
      '.container-search'
    ) as HTMLInputElement;
    containerSearch.style.width = 'auto';

    const inputSearch = document.querySelector(
      '#inputSearch'
    ) as HTMLInputElement;
    inputSearch.style.width = '0';
    inputSearch.style.borderBottomColor = 'var(--ColorPrincipal)';

    this.executeAfterTimeout();
  }

  static executeAfterTimeout() {
    setTimeout(() => {
      const containerFiltros = document.querySelectorAll('.filtro');

      containerFiltros.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.display = 'flex';
        }
      });
    }, 300); 
  }
}
