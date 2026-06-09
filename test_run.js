const chromium = require('chromium-cli');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to local server
  await page.goto('http://localhost:8000/matchmaking-style-test/', { waitUntil: 'networkidle' });
  
  // Take initial screenshot
  await page.screenshot({ path: '/tmp/matchmaking-1-start.png', fullPage: true });
  console.log('✓ Start screen captured');
  
  // Scroll down to see more content
  await page.evaluate(() => window.scrollBy(0, 500));
  await page.waitForTimeout(300);
  await page.screenshot({ path: '/tmp/matchmaking-2-scroll.png', fullPage: true });
  console.log('✓ Scrolled view captured');
  
  // Click start button
  const startBtn = await page.$('button[onclick="startDiagnosis()"]');
  if (startBtn) {
    await startBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: '/tmp/matchmaking-3-quiz-start.png', fullPage: true });
    console.log('✓ Quiz screen captured');
    
    // Answer first question
    const q1Option = await page.$('button[onclick="selectOption(1, \'male\', this)"]');
    if (q1Option) {
      await q1Option.click();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: '/tmp/matchmaking-4-q1-answered.png', fullPage: true });
      console.log('✓ Q1 answered, screen captured');
    }
  }
  
  // Check for any console errors
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('error', err => console.log('PAGE ERROR:', err));
  
  await browser.close();
})().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});
