import { execSync } from 'child_process';

export async function runLighthouseAudit(url: string, outputPath: string) {
  const command = `npx lighthouse ${url} --output html --output csv --output-path ${outputPath} --screenEmulation.desktop --only-categories=performance,accessibility,best-practices,seo,pwa --quiet`;

  try {
    const auditResults = execSync(command);
    console.log('Lighthouse audit completed successfully.');
    return auditResults.toString();
  } catch (error:any ) {
    console.error('Error running Lighthouse audit:', error.message);
    throw error;
  }
}
