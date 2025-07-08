import { setWorldConstructor, World, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  constructor(options: any) {
    super(options);
  }

  async init() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  }

  async close() {
    await this.page?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);

// Export a singleton page for step definitions (for simplicity)
export let page: Page;

Before(async function () {
  const world = this as CustomWorld;
  await world.init();
  page = world.page;
});

After(async function () {
  const world = this as CustomWorld;
  await world.close();
}); 