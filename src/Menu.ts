export class Menu {
  // #region Public Methods (1)

  public add(selector: string, callback: any) {
    const elt = document.querySelector(selector);

    if (!elt) {
      throw new Error("bad selector for menu button: " + selector);
    }

    elt.addEventListener("click", callback);
  }

  // #endregion Public Methods (1)
}
