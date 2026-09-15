import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("apresenta o serviço fictício e navega pelas seções", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Engenharia começa");
  await expect(page.getByText(/empresa fictícia · projeto demonstrativo/i)).toBeVisible();
  await page.getByRole("link", { name: /conhecer os exemplos/i }).click();
  await expect(page.locator("#servicos")).toBeInViewport();
});

test("gera um resumo sem realizar requisições de formulário", async ({ page }) => {
  const unsafeRequests: string[] = [];
  page.on("request", (request) => {
    if (request.method() !== "GET") unsafeRequests.push(`${request.method()} ${request.url()}`);
  });

  await page.goto("/");
  await page.getByLabel(/como podemos chamar/i).fill("Marina");
  await page.getByLabel(/qual é o interesse/i).selectOption("Diagnóstico e documentação");
  await page.getByLabel(/contexto inicial/i).fill("Organizar documentos de demonstração.");
  await page.getByRole("button", { name: /gerar resumo local/i }).click();

  await expect(page.getByLabel(/resumo demonstrativo gerado/i)).toContainText("Nome: Marina");
  await expect(page.getByText(/nenhum dado foi enviado ou armazenado/i)).toBeVisible();
  expect(unsafeRequests).toEqual([]);
});

test("não apresenta rolagem horizontal em 320 px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/");

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBe(false);
});

test("menu móvel pode ser operado por teclado", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Cenário específico do projeto móvel");
  await page.goto("/");

  const button = page.locator('button[aria-controls="navigation-menu"]');
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(button).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(button).toBeFocused();
});

test("não possui violações automáticas de acessibilidade", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
