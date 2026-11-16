export class SpaceItem {
  constructor({ id, title, subtitle, locationTag, theme, image, specs, sections, didYouKnow }){
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.locationTag = locationTag;
    this.theme = theme || 'moon'; // 'moon' or 'mars'
    this.image = image; // { url, alt, caption }
    this.specs = specs; // Array of { label, value }
    this.sections = sections; // Array of { heading, paragraphs }
    this.didYouKnow = didYouKnow; // Optional { title, text }
  }

  render(){
    // 1. Update Page Title & Hero
    document.title = `${this.title} | Relics of the Cosmos`;
    document.getElementById('hero-tag').textContent = this.locationTag;
    document.getElementById('hero-title').textContent = this.title;
    document.getElementById('hero-subtitle').textContent = this.subtitle;
    // 2. Apply Mars vs. Moon accent color if needed
    if (this.theme === 'mars') {
      document.documentElement.style.setProperty('--accent-moon', 'var(--accent-mars)');
    }
    // 3. Render Main Image
    const imgEl = document.getElementById('relic-img');
    imgEl.src = this.image.url;
    imgEl.alt = this.image.alt;
    imgEl.hidden = false;
    document.getElementById('relic-caption').innerHTML = this.image.caption;
    // 4. Render Specs Grid
    const specsContainer = document.getElementById('specs-grid');
    specsContainer.innerHTML = this.specs.map(spec => `
      <div class="spec-box">
        <div class="spec-label">${spec.label}</div>
        <div class="spec-value">${spec.value}</div>
      </div>
    `).join('');
    
    // 5. Render Article Sections & Did You Know
    const storyContainer = document.getElementById('story-container');
    let html = this.sections.map(sec => `
      <section class="article-section">
        <h2>${sec.heading}</h2>
        ${sec.paragraphs.map(p => `<p>${p}</p>`).join('')}
      </section>
    `).join('');
    
    if (this.didYouKnow) {
      html += `
        <div class="did-you-know">
          <h3>${this.didYouKnow.title}</h3>
          <p>${this.didYouKnow.text}</p>
        </div>
      `;
    }
    storyContainer.innerHTML = html;
  }     
}