export interface Post {
  slug: string
  category: "journal" | "article"
  title: string
  date: string
  excerpt: string
  content: string
  seoTitle?: string
  seoDescription?: string
}

export const posts: Post[] = [
  {
    slug: "retreat-day-1",
    category: "journal",
    title: "Day 1: I Arrived Smelling Like Alcohol. The Doctor Noticed.",
    date: "May 25, 2026",
    excerpt: "An honest first-person account of day 1 at an Ayurvedic retreat in Kerala — arriving with addiction, anxiety and bad sleep, the intake consultation, Abhyanga, and why I'm really here.",
    seoTitle: "Day 1 at an Ayurvedic Retreat: Arriving in the Wrong Condition",
    seoDescription: "An honest first-person account of day 1 at an Ayurvedic retreat in Kerala — arriving with addiction, anxiety and bad sleep, the intake consultation, Abhyanga, and why I'm really here.",
    content: `<p>Arriving at an Ayurvedic retreat in Kerala after years of anxiety, poor sleep, and unresolved addiction issues felt like stepping into a different world. The smell of incense and ghee replaced the smell of alcohol I'd been carrying. Within hours of arrival, I was in a consultation with Dr. Anjali, who asked simple questions and listened without judgment.</p>
<p>The intake process included Abhyanga — a full-body oil massage that lasted 90 minutes. My nervous system, which had been in fight-or-flight for years, finally began to settle. The oil was warm, the hands were skilled, and something in me softened.</p>
<p>This is where the real work begins.</p>`,
  },
  {
    slug: "best-tea-for-stress",
    category: "article",
    title: "Best Tea for Stress: What Ayurveda Recommends Beyond Chamomile",
    date: "May 30, 2026",
    excerpt: "The best teas for stress depend on the type — Vata needs ashwagandha and brahmi, Pitta needs rose and brahmi, Kapha needs tulsi and ginger. The complete Ayurvedic stress tea guide.",
    seoTitle: "Best Tea for Stress: What Ayurveda Recommends Beyond Chamomile",
    seoDescription: "The best teas for stress depend on the type — Vata needs ashwagandha and brahmi, Pitta needs rose and brahmi, Kapha needs tulsi and ginger. The complete Ayurvedic stress tea guide.",
    content: `<h2>The Problem With Standard Stress Teas</h2>
<p>Most Western stress teas are chamomile-based. Chamomile works for some people, but if you're still wired after a cup, you're probably not using the right herb for your constitution. Ayurveda recognizes that stress manifests differently depending on your dosha, and the herbs that address one type of stress can actually worsen another.</p>
<h2>Vata Stress: The Scattered, Anxious Type</h2>
<p>Vata stress is characterized by racing thoughts, anxiety, difficulty focusing, and a sense of being scattered. The nervous system is hyperactive and depleted simultaneously. Ashwagandha and Brahmi are the primary herbs for this type. Ashwagandha calms the fight-or-flight response while nourishing the nervous system. Brahmi quiets racing thoughts specifically. Combined with warm milk and a pinch of nutmeg, this becomes a nervous system reset.</p>
<h2>Pitta Stress: The Inflamed, Reactive Type</h2>
<p>Pitta stress manifests as irritability, quick reactivity, burnout, and inflammation. The system is overheated and sharp. Rose is cooling and calming to the inflamed nervous system. Brahmi supports the mind. Passionflower and skullcap are Western herbs that work synergistically with the Ayurvedic approach to cool Pitta stress.</p>
<h2>Kapha Stress: The Heavy, Stagnant Type</h2>
<p>Kapha stress presents as lethargy, heaviness, depression, and stuckness. The system is sluggish and needs to be awakened. Tulsi (Holy Basil) is stimulating and grounding. Ginger warms the system and supports circulation. These create movement and lift in the system that static calm cannot achieve.</p>`,
  },
  {
    slug: "best-tea-for-vata",
    category: "article",
    title: "Best Tea for Vata Dosha: Daily Drinks That Ground an Overactive Nervous System",
    date: "May 29, 2026",
    excerpt: "The best teas for Vata — ashwagandha, ginger, cardamom, jatamansi — and when to drink them for digestion, anxiety, and sleep. The complete Vata tea guide.",
    seoTitle: "Best Tea for Vata Dosha: Daily Drinks That Ground an Overactive Nervous System",
    seoDescription: "The best teas for Vata — ashwagandha, ginger, cardamom, jatamansi — and when to drink them for digestion, anxiety, and sleep. The complete Vata tea guide.",
    content: `<p>Vata dosha is the dosha of air and space — quick, creative, anxious, and prone to overthinking. Vata types need grounding, nourishing teas that settle the nervous system and support digestion. The best teas for Vata are warming, slightly heavy, and calming.</p>
<h2>Morning: Ashwagandha Ginger Tea</h2>
<p>Start the day with ashwagandha and ginger. Ashwagandha strengthens and nourishes the nervous system, reducing the tendency toward scattered anxiety. Ginger ignites the digestive fire. A pinch of cardamom aids digestion. Drink warm 20 minutes before food.</p>
<h2>Afternoon: Brahmi Tea</h2>
<p>Brahmi cools the mind and reduces mental chatter. For Vata, this prevents the afternoon spiral into overthinking. Brahmi also supports learning and memory. Use 1 teaspoon dried brahmi steeped 10 minutes in hot water.</p>
<h2>Evening: Jatamansi Sleep Tea</h2>
<p>Jatamansi is the Vata sleep herb. It calms the 3am wake-up pattern where the mind activates and won't stop. Take 30 minutes before bed with warm milk, a pinch of nutmeg, and honey. This regulates sleep quality for Vata specifically.</p>`,
  },
  {
    slug: "best-tea-for-bloating",
    category: "article",
    title: "Best Tea for Bloating: The Ayurvedic Approach to a Digestive System That Won't Quit",
    date: "May 28, 2026",
    excerpt: "The best teas for bloating depend on the type — CCF tea for Vata gas, fennel for Pitta inflammation, trikatu for Kapha heaviness. The Ayurvedic guide to fixing bloating for good.",
    seoTitle: "Best Tea for Bloating: The Ayurvedic Approach to a Digestive System That Won't Quit",
    seoDescription: "The best teas for bloating depend on the type — CCF tea for Vata gas, fennel for Pitta inflammation, trikatu for Kapha heaviness. The Ayurvedic guide to fixing bloating for good.",
    content: `<p>Bloating is one of the most common complaints in Ayurveda, and the solution depends entirely on your dosha type. Different doshas create bloating through different mechanisms, so the tea that works for one type can make another worse.</p><h2>CCF Tea for Vata Bloating</h2><p>Vata bloating is caused by irregular digestion and gas accumulation. CCF tea (Cumin, Coriander, Fennel) is the classical Ayurvedic remedy. The combination of warming spices ignites digestive fire while the fennel reduces gas. Drink 30 minutes before meals.</p><h2>Fennel for Pitta Bloating</h2><p>Pitta bloating comes from excess heat and inflammation in the digestive tract. Fennel is cooling and reduces inflammation. Pure fennel tea after meals soothes the irritated digestive system.</p><h2>Trikatu for Kapha Bloating</h2><p>Kapha bloating is heaviness and sluggish digestion. Trikatu (ginger, black pepper, long pepper) is warming and stimulating. This combination creates the digestive movement needed to prevent Kapha stagnation.</p>`,
  },
  {
    slug: "ayurvedic-skin-guide",
    category: "article",
    title: "The Ayurvedic Skin Guide: Why Your Skin Reflects What Is Happening Inside",
    date: "May 27, 2026",
    excerpt: "Ayurveda treats skin conditions from the inside — through the gut, liver, and doshas. The complete guide to Ayurvedic skincare by skin type, herbs, diet, and external practices.",
    seoTitle: "The Ayurvedic Skin Guide: Why Your Skin Reflects What Is Happening Inside",
    seoDescription: "Ayurveda treats skin conditions from the inside — through the gut, liver, and doshas. The complete guide to Ayurvedic skincare by skin type, herbs, diet, and external practices.",
    content: `<p>Your skin condition tells the story of what is happening inside your body. Ayurveda treats skin from the inside out — through the digestive system, liver, and nervous system — rather than just topical application.</p><h2>Vata Skin: Dry, Sensitive, Aging</h2><p>Vata skin is thin, dry, and prone to premature aging lines. The skin lacks nourishment and protective oils. Treatment focuses on warm oil massage (abhyanga), nourishing foods, and grounding herbs like sesame oil and brahmi. Consistency matters more than products.</p><h2>Pitta Skin: Inflamed, Reactive, Acne-Prone</h2><p>Pitta skin is reactive, inflamed, and prone to acne and rosacea. The liver is overheated. Treatment focuses on cooling — internal and external. Rose water, neem, brahmi, and cooling foods are primary. Avoid heating herbs and excess sun exposure.</p><h2>Kapha Skin: Heavy, Oily, Congested</h2><p>Kapha skin is thick, oily, and prone to congestion and cystic acne. The lymphatic system is sluggish. Treatment focuses on stimulation — dry massage (garshana), warming spices, and movement. Triphala and neem support the detoxification process.</p>`,
  },
  {
    slug: "kapha-foods-to-avoid",
    category: "article",
    title: "Kapha Foods to Avoid: Why You Feel Heavy, Tired, and Stuck",
    date: "May 18, 2026",
    excerpt: "The complete list of foods that aggravate Kapha dosha — dairy, wheat, sweets, cold food, and large portions. Why each one makes Kapha fatigue and weight gain worse.",
    seoTitle: "Kapha Foods to Avoid: Why You Feel Heavy, Tired, and Stuck",
    seoDescription: "The complete list of foods that aggravate Kapha dosha — dairy, wheat, sweets, cold food, and large portions. Why each one makes Kapha fatigue and weight gain worse.",
    content: `<p>Kapha dosha becomes imbalanced when fed heavy, cold, oily, and sweet foods. These foods increase the qualities that are already dominant in Kapha — heaviness, lethargy, sluggishness, and weight gain. The solution is to eat the opposite qualities: light, warm, stimulating, and dry.</p><h2>Dairy to Avoid</h2><p>Dairy is heavy, cold, and congesting. It increases Kapha mucus and sluggishness. If you consume dairy, use warm milk with spices like ginger and black pepper to make it less congesting. Better alternatives include herbal teas and warm broths.</p><h2>Wheat to Limit</h2><p>Wheat is heavy and mucus-forming. For Kapha types struggling with weight and congestion, barley and quinoa are lighter alternatives that don't create the same sluggishness.</p><h2>Sweets and Cold Foods</h2><p>Sugar increases Kapha directly. Cold foods slow digestion and reduce the metabolic fire. Room temperature or warm foods eaten in smaller portions, with warming spices like cayenne and ginger, support Kapha balance and steady weight.</p>`,
  },
  {
    slug: "vata-foods-to-avoid",
    category: "article",
    title: "Vata Foods to Avoid: What Is Making Your Anxiety and Digestion Worse",
    date: "May 17, 2026",
    excerpt: "The complete list of foods that aggravate Vata dosha — cold food, dry snacks, caffeine, carbonated drinks, and irregular eating. Why each one makes Vata symptoms worse.",
    seoTitle: "Vata Foods to Avoid: What Is Making Your Anxiety and Digestion Worse",
    seoDescription: "The complete list of foods that aggravate Vata dosha — cold food, dry snacks, caffeine, carbonated drinks, and irregular eating. Why each one makes Vata symptoms worse.",
    content: `<p>Vata dosha becomes imbalanced through cold, dry, light, and irregular foods. These foods increase the qualities already present in Vata — anxiety, scattered thoughts, constipation, and poor sleep. The solution is eating the opposite: warm, grounding, nourishing, and consistent.</p><h2>Cold Foods and Drinks</h2><p>Cold water, smoothies, salads, and raw vegetables aggravate Vata significantly. The cold quality disrupts digestion and increases anxiety. Switch to warm broths, cooked vegetables, and room temperature water with meals. This single change often resolves Vata digestion issues.</p><h2>Dry Snacks and Irregular Meals</h2><p>Vata types are prone to skipping meals and grazing on dry snacks. This irregular eating and dry food directly increase Vata symptoms — anxiety, bloating, and constipation. Establish regular meal times with warm, well-cooked foods that include healthy fats like ghee and sesame oil.</p><h2>Caffeine and Carbonated Drinks</h2><p>Caffeine increases the Vata nervous system activation, making anxiety and sleep issues worse. Carbonated drinks create gas and bloating. Replace with warm herbal teas like ashwagandha or brahmi, which ground the nervous system instead.</p>`,
  },
  {
    slug: "ayurveda-alcohol-recovery",
    category: "article",
    title: "Ayurveda and Alcohol Recovery: What the System Actually Offers",
    date: "May 16, 2026",
    excerpt: "Ayurveda offers specific herbs and practices for alcohol recovery — ashwagandha, brahmi, triphala, and a nervous system reset protocol. An honest account of what it does and does not do.",
    seoTitle: "Ayurveda and Alcohol Recovery: What the System Actually Offers",
    seoDescription: "Ayurveda offers specific herbs and practices for alcohol recovery — ashwagandha, brahmi, triphala, and a nervous system reset protocol. An honest account of what it does and does not do.",
    content: `<p>Alcohol is extremely Pitta in nature — it heats the system, inflames the liver, disrupts the nervous system, and creates dependency patterns that yoga traditions recognized thousands of years ago. Ayurveda offers specific protocols for recovery from alcohol dependency.</p><h2>The Nervous System Reset</h2><p>Recovery from alcohol requires a nervous system that has been re-regulated without the substance. Ashwagandha is primary — it nourishes the nervous system and reduces the craving response. Brahmi quiets the obsessive thoughts about drinking. These are taken daily, not as-needed.</p><h2>Liver Regeneration</h2><p>The liver must detoxify the accumulated Pitta from alcohol use. Triphala and milk thistle support this process. A liver-supportive diet without heat and inflammation allows the organ to recover. This takes months, not weeks.</p><h2>Sleep and Digestion Repair</h2><p>Alcohol disrupts both sleep and digestion — the two foundations of recovery. Jatamansi and ashwagandha support sleep. Ginger and warm lemon water support digestion and elimination of metabolic toxins. These become non-negotiable daily practices.</p>`,
  },
  {
    slug: "why-am-i-always-tired",
    category: "article",
    title: "Why Am I Always Tired? The Ayurvedic Explanation by Dosha Type",
    date: "May 15, 2026",
    excerpt: "Persistent fatigue has three different causes in Ayurveda — Vata depletion, Pitta inflammation, and Kapha sluggishness. Identifying yours changes everything about what to do.",
    seoTitle: "Why Am I Always Tired? The Ayurvedic Explanation by Dosha Type",
    seoDescription: "Persistent fatigue has three different causes in Ayurveda — Vata depletion, Pitta inflammation, and Kapha sluggishness. Identifying yours changes everything about what to do.",
    content: `<p>Persistent fatigue has three entirely different causes in Ayurveda, and treating the wrong cause will not resolve the fatigue. The first step is identifying which type you have.</p><h2>Vata Fatigue: Depletion</h2><p>Vata fatigue is nervous system depletion from overactivity, irregular sleep, or anxiety. You feel tired but wired. The solution is rest, warm oil massage, and nourishing foods like warm milk and ghee. Ashwagandha rebuilds the depleted nervous system over weeks.</p><h2>Pitta Fatigue: Inflammation and Burnout</h2><p>Pitta fatigue is burnout — inflammation and overheating in the system. You feel exhausted despite sleeping. The solution is cooling — diet, lifestyle, and cooling herbs like rose and brahmi. This requires conscious slowing down and release of perfectionism.</p><h2>Kapha Fatigue: Sluggishness</h2><p>Kapha fatigue is heaviness and lethargy. You sleep too much and still feel tired. The solution is stimulation and movement — exercise, warming spices, and dry massage. This type of fatigue often improves within days of increased movement and spice.</p>`,
  },
  {
    slug: "nervous-system-burnout",
    category: "article",
    title: "Signs of Nervous System Burnout — And the Ayurvedic Path Back",
    date: "May 14, 2026",
    excerpt: "Nervous system burnout is not ordinary tiredness. Here are the specific signs, what causes it in Ayurvedic terms, and the recovery protocol that actually works.",
    seoTitle: "Signs of Nervous System Burnout — And the Ayurvedic Path Back",
    seoDescription: "Nervous system burnout is not ordinary tiredness. Here are the specific signs, what causes it in Ayurvedic terms, and the recovery protocol that actually works.",
    content: `<p>This article explores day 1: i arrived smelling like alcohol. the doctor noticed.. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "kapha-morning-routine",
    category: "article",
    title: "Kapha Morning Routine: How to Actually Wake Up",
    date: "May 13, 2026",
    excerpt: "The Ayurvedic morning routine for Kapha — why waking before 6am matters, why breakfast should be skipped, and why vigorous exercise before eating is non-negotiable for Kapha types.",
    seoTitle: "Kapha Morning Routine: How to Actually Wake Up",
    seoDescription: "The Ayurvedic morning routine for Kapha — why waking before 6am matters, why breakfast should be skipped, and why vigorous exercise before eating is non-negotiable for Kapha types.",
    content: `<p>This article explores kapha morning routine: how to actually wake up. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "pitta-anger-sleep",
    category: "article",
    title: "Pitta and Anger: Why You Are Irritable, Inflamed, and Not Sleeping",
    date: "May 12, 2026",
    excerpt: "Pitta imbalance causes anger, skin inflammation, acid reflux, and the 10pm-2am sleep disruption pattern. Here is what is happening and what actually helps.",
    seoTitle: "Pitta and Anger: Why You Are Irritable, Inflamed, and Not Sleeping",
    seoDescription: "Pitta imbalance causes anger, skin inflammation, acid reflux, and the 10pm-2am sleep disruption pattern. Here is what is happening and what actually helps.",
    content: `<p>This article explores pitta and anger: why you are irritable, inflamed, and not sleeping. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "signs-of-vata-imbalance",
    category: "article",
    title: "Signs of Vata Imbalance: Is Your Nervous System Running on Empty?",
    date: "May 11, 2026",
    excerpt: "Dry skin, constipation, racing thoughts, anxiety without cause — the complete guide to Vata imbalance symptoms, what causes them, and how to bring Vata back into balance.",
    seoTitle: "Signs of Vata Imbalance: Is Your Nervous System Running on Empty?",
    seoDescription: "Dry skin, constipation, racing thoughts, anxiety without cause — the complete guide to Vata imbalance symptoms, what causes them, and how to bring Vata back into balance.",
    content: `<p>This article explores signs of vata imbalance: is your nervous system running on empty?. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurvedic-weight-loss",
    category: "article",
    title: "Ayurvedic Weight Loss Guide: Why Diets Do Not Work for Your Dosha (And What Does)",
    date: "May 25, 2026",
    excerpt: "Ayurveda explains weight gain by dosha — Vata, Pitta, and Kapha each gain weight for different reasons and need different approaches. The complete Ayurvedic weight loss guide.",
    seoTitle: "Ayurvedic Weight Loss Guide: Why Diets Do Not Work for Your Dosha (And What Does)",
    seoDescription: "Ayurveda explains weight gain by dosha — Vata, Pitta, and Kapha each gain weight for different reasons and need different approaches. The complete Ayurvedic weight loss guide.",
    content: `<p>This article explores ayurvedic weight loss guide: why diets do not work for your dosha (and what does). Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "best-ayurvedic-tea-digestion",
    category: "article",
    title: "Best Ayurvedic Tea for Digestion: What to Drink Before, During, and After Meals",
    date: "May 23, 2026",
    excerpt: "The best Ayurvedic teas for digestion — ginger, CCF tea, fennel, triphala. What to drink before and after meals to fix bloating, gas, constipation, and sluggish digestion.",
    seoTitle: "Best Ayurvedic Tea for Digestion: What to Drink Before, During, and After Meals",
    seoDescription: "The best Ayurvedic teas for digestion — ginger, CCF tea, fennel, triphala. What to drink before and after meals to fix bloating, gas, constipation, and sluggish digestion.",
    content: `<p>This article explores best ayurvedic tea for digestion: what to drink before, during, and after meals. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "best-ayurvedic-tea-sleep",
    category: "article",
    title: "Best Ayurvedic Tea for Sleep: The Herbs That Actually Work",
    date: "May 22, 2026",
    excerpt: "The best Ayurvedic teas for sleep — jatamansi, ashwagandha, brahmi, valerian. What the herbs do, when to take them, and the warm milk ritual that outperforms most sleep teas.",
    seoTitle: "Best Ayurvedic Tea for Sleep: The Herbs That Actually Work",
    seoDescription: "The best Ayurvedic teas for sleep — jatamansi, ashwagandha, brahmi, valerian. What the herbs do, when to take them, and the warm milk ritual that outperforms most sleep teas.",
    content: `<p>This article explores best ayurvedic tea for sleep: the herbs that actually work. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "best-ayurvedic-tea-anxiety",
    category: "article",
    title: "Best Ayurvedic Tea for Anxiety: What to Drink, When, and Why",
    date: "May 21, 2026",
    excerpt: "The best Ayurvedic teas for anxiety by dosha type — ashwagandha, brahmi, jatamansi, and tulsi with practical blends and timing for Vata, Pitta, and Kapha anxiety.",
    seoTitle: "Best Ayurvedic Tea for Anxiety: What to Drink, When, and Why",
    seoDescription: "The best Ayurvedic teas for anxiety by dosha type — ashwagandha, brahmi, jatamansi, and tulsi with practical blends and timing for Vata, Pitta, and Kapha anxiety.",
    content: `<p>This article explores best ayurvedic tea for anxiety: what to drink, when, and why. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "kapha-diet-plan",
    category: "article",
    title: "Kapha Diet Plan: How to Eat for Energy When Your Body Wants to Do Nothing",
    date: "May 24, 2026",
    excerpt: "The complete Kapha diet plan — best foods to stimulate Kapha metabolism, what to avoid, and a practical daily template including the most common Kapha mistakes.",
    seoTitle: "Kapha Diet Plan: How to Eat for Energy When Your Body Wants to Do Nothing",
    seoDescription: "The complete Kapha diet plan — best foods to stimulate Kapha metabolism, what to avoid, and a practical daily template including the most common Kapha mistakes.",
    content: `<p>This article explores kapha diet plan: how to eat for energy when your body wants to do nothing. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "pitta-diet-plan",
    category: "article",
    title: "Pitta Diet Plan: How to Cool the Fire Without Losing the Edge",
    date: "May 20, 2026",
    excerpt: "The complete Pitta diet plan — best foods to cool Pitta, what to avoid, and a practical daily template including the most common Pitta dietary mistakes.",
    seoTitle: "Pitta Diet Plan: How to Cool the Fire Without Losing the Edge",
    seoDescription: "The complete Pitta diet plan — best foods to cool Pitta, what to avoid, and a practical daily template including the most common Pitta dietary mistakes.",
    content: `<p>This article explores pitta diet plan: how to cool the fire without losing the edge. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "vata-diet-plan",
    category: "article",
    title: "Vata Diet Plan: What to Eat, What to Avoid, and How to Fix Your Digestion",
    date: "May 19, 2026",
    excerpt: "The complete Vata diet plan — best foods for Vata dosha, what to avoid, and a practical daily template including the most common Vata dietary mistakes.",
    seoTitle: "Vata Diet Plan: What to Eat, What to Avoid, and How to Fix Your Digestion",
    seoDescription: "The complete Vata diet plan — best foods for Vata dosha, what to avoid, and a practical daily template including the most common Vata dietary mistakes.",
    content: `<p>This article explores vata diet plan: what to eat, what to avoid, and how to fix your digestion. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "retreat-day-6",
    category: "journal",
    title: "Day 6: The Enema, the Standoff, and the Temple Behind the Bodega.",
    date: "May 30, 2026",
    excerpt: "1.5 hours of sleep, treatment refusal, a temple behind a bodega, and the anxiety of thinking about leaving. Day 6 at the Ayurvedic retreat in Kerala.",
    seoTitle: "Day 6: The Enema, the Standoff, and the Temple Behind the Bodega.",
    seoDescription: "An honest first-person account of day 6 at an Ayurvedic retreat in India — treatment refusal, spiritual wandering, and the weight of self-awareness.",
    content: `<p>This article explores day 6: the enema, the standoff, and the temple behind the bodega.. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "retreat-day-5",
    category: "journal",
    title: "Day 5: I Watched the NBA Finals at 6am, Got Poured Buttermilk on My Head, and Still Can't Turn My Brain Off",
    date: "May 30, 2026",
    excerpt: "3.5 hours of sleep, back pain gone, buttermilk treatment, and the unsettling realization that I need to lean in harder. Day 5 at the Ayurvedic retreat in Kerala.",
    seoTitle: "Day 5: I Watched the NBA Finals at 6am, Got Poured Buttermilk on My Head, and Still Can't Turn My Brain Off",
    seoDescription: "An honest first-person account of day 5 at an Ayurvedic retreat in India — yoga breakthroughs, portion control recalibration, sound bath paradoxes, and the ongoing battle between the mind and the body.",
    content: `<p>This article explores day 5: i watched the nba finals at 6am, got poured buttermilk on my head, and still can't turn my brain off. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "signs-of-high-cortisol",
    category: "article",
    title: "Signs of High Cortisol — And What Ayurveda Does About It",
    date: "May 9, 2026",
    excerpt: "Belly fat, waking at 3am, afternoon crashes — these are signs of elevated cortisol. Here is what Ayurveda identifies as the cause and the fix.",
    seoTitle: "Signs of High Cortisol — And What Ayurveda Does About It",
    seoDescription: "Belly fat, waking at 3am, afternoon crashes — these are signs of elevated cortisol. Here is what Ayurveda identifies as the cause and the fix.",
    content: `<p>This article explores signs of high cortisol — and what ayurveda does about it. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "best-herbs-for-anxiety",
    category: "article",
    title: "Best Ayurvedic Herbs for Anxiety: What Actually Works and Why",
    date: "May 7, 2026",
    excerpt: "Ayurveda has specific herbs for anxiety — not sedatives, but nervines that nourish the stressed nervous system. Here is what works and how to use it correctly.",
    seoTitle: "Best Ayurvedic Herbs for Anxiety: What Actually Works and Why",
    seoDescription: "Ayurveda has specific herbs for anxiety — not sedatives, but nervines that nourish the stressed nervous system. Here is what works and how to use it correctly.",
    content: `<p>This article explores best ayurvedic herbs for anxiety: what actually works and why. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurvedic-morning-routine",
    category: "article",
    title: "Ayurvedic Morning Routine: The Complete Step-by-Step Guide",
    date: "May 10, 2026",
    excerpt: "The complete Ayurvedic morning routine — what to do, in order, and why. Includes the realistic 15-minute version for people with real lives.",
    seoTitle: "Ayurvedic Morning Routine: The Complete Step-by-Step Guide",
    seoDescription: "The complete Ayurvedic morning routine — what to do, in order, and why. Includes the realistic 15-minute version for people with real lives.",
    content: `<p>This article explores ayurvedic morning routine: the complete step-by-step guide. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ashwagandha-benefits",
    category: "article",
    title: "Ashwagandha Benefits: What the Research Actually Says (And What Ayurveda Has Known for 3,000 Years)",
    date: "May 8, 2026",
    excerpt: "Ashwagandha is the most researched Ayurvedic herb in Western science. Here is what the clinical trials actually show — and how to use it correctly.",
    seoTitle: "Ashwagandha Benefits: What the Research Actually Says (And What Ayurveda Has Known for 3,000 Years)",
    seoDescription: "Ashwagandha is the most researched Ayurvedic herb in Western science. Here is what the clinical trials actually show — and how to use it correctly.",
    content: `<p>This article explores ashwagandha benefits: what the research actually says (and what ayurveda has known for 3,000 years). Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "why-am-i-always-bloated",
    category: "article",
    title: "Why Am I Always Bloated? The Ayurvedic Explanation (And What to Do About It)",
    date: "May 6, 2026",
    excerpt: "Chronic bloating is not random. Ayurveda explains it as weak digestive fire and Vata imbalance — with specific fixes that go beyond cutting food groups.",
    seoTitle: "Why Am I Always Bloated? The Ayurvedic Explanation (And What to Do About It)",
    seoDescription: "Chronic bloating is not random. Ayurveda explains it as weak digestive fire and Vata imbalance — with specific fixes that go beyond cutting food groups.",
    content: `<p>This article explores why am i always bloated? the ayurvedic explanation (and what to do about it). Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurvedic-tea-guide",
    category: "article",
    title: "Ayurvedic Tea Guide: Best Teas for Vata, Pitta, and Kapha Dosha",
    date: "May 5, 2026",
    excerpt: "The complete guide to Ayurvedic tea by dosha — which herbs Vata, Pitta, and Kapha types actually need, and how to use herbal tea as a daily health practice.",
    seoTitle: "Ayurvedic Tea Guide: Best Teas for Vata, Pitta, and Kapha Dosha",
    seoDescription: "The complete guide to Ayurvedic tea by dosha — which herbs Vata, Pitta, and Kapha types actually need, and how to use herbal tea as a daily health practice.",
    content: `<p>This article explores ayurvedic tea guide: best teas for vata, pitta, and kapha dosha. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "retreat-day-3",
    category: "journal",
    title: "Day 3: My Body Is Detoxing, My Mood Is a Ping Pong Ball, and I Hit 15,000 Steps",
    date: "May 27, 2026",
    excerpt: "First good night of sleep. Eight hours. My resting heart rate was 74. And then my digestive system staged a full revolt.",
    seoTitle: "What Really Happens at an Ayurvedic Retreat: Day 3 — Shirodhara, Detox & Mood Swings",
    seoDescription: "An honest first-person account of day 3 at an Ayurvedic retreat in India — Shirodhara treatment, detox side effects, mood swings, and what nobody warns you about before you go.",
    content: `<p>This article explores day 3: my body is detoxing, my mood is a ping pong ball, and i hit 15,000 steps. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "retreat-day-4",
    category: "journal",
    title: "Retreat Journal Day 4: What a Vata Type Gets Wrong About Exercise",
    date: "May 28, 2026",
    excerpt: "Day 4 at an Ayurvedic retreat in Kerala: the doctor tells me to stop moving, shirodhara finally works, and I reckon with how much I've been avoiding the whole point of being here.",
    seoTitle: "Retreat Journal Day 4: What a Vata Type Gets Wrong About Exercise",
    seoDescription: "Day 4 at an Ayurvedic retreat in Kerala: the doctor tells me to stop moving, shirodhara finally works, and I reckon with how much I've been avoiding the whole point of being here.",
    content: `<p>This article explores retreat journal day 4: what a vata type gets wrong about exercise. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-burnout",
    category: "article",
    title: "Burnout Symptoms and Recovery: The Ayurvedic Explanation",
    date: "May 28, 2026",
    excerpt: "Ayurveda explains burnout as a depletion of ojas — vital essence — with specific patterns for Vata, Pitta, and Kapha types. Here's what the recovery actually looks like.",
    seoTitle: "Burnout Through an Ayurvedic Lens: What's Actually Happening and How to Recover",
    seoDescription: "Ayurveda explains burnout as a depletion of ojas — vital essence — with specific patterns for Vata, Pitta, and Kapha types. Here's what the recovery actually looks like.",
    content: `<p>This article explores burnout symptoms and recovery: the ayurvedic explanation. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-30-days",
    category: "article",
    title: "I Followed an Ayurvedic Routine for 30 Days: Here's What Actually Changed",
    date: "May 25, 2026",
    excerpt: "What happens when you consistently follow an Ayurvedic daily routine for 30 days? Digestion, sleep, anxiety, skin — an honest account of what changed and what didn't.",
    seoTitle: "I Followed an Ayurvedic Routine for 30 Days: Here's What Actually Changed",
    seoDescription: "What happens when you consistently follow an Ayurvedic daily routine for 30 days? Digestion, sleep, anxiety, skin — an honest account of what changed and what didn't.",
    content: `<p>This article explores i followed an ayurvedic routine for 30 days: here's what actually changed. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-no-time",
    category: "article",
    title: "Simple Ayurvedic Daily Routine for Busy People (Under 30 Minutes)",
    date: "May 23, 2026",
    excerpt: "You don't need to overhaul your life to benefit from Ayurveda. Here are the 7 highest-leverage Ayurvedic practices for people who are actually busy — and what they do.",
    seoTitle: "Ayurveda for Busy People: 7 Practices That Take Under 30 Minutes a Day",
    seoDescription: "You don't need to overhaul your life to benefit from Ayurveda. Here are the 7 highest-leverage Ayurvedic practices for people who are actually busy — and what they do.",
    content: `<p>This article explores simple ayurvedic daily routine for busy people (under 30 minutes). Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-pms",
    category: "article",
    title: "Natural PMS Relief: The Ayurvedic Approach by Dosha Type",
    date: "May 22, 2026",
    excerpt: "Ayurveda identifies three distinct PMS patterns — Vata, Pitta, and Kapha — each with different causes and different remedies. Here's how to identify yours and what actually helps.",
    seoTitle: "The Ayurvedic Approach to PMS: Three Patterns and What to Do About Each",
    seoDescription: "Ayurveda identifies three distinct PMS patterns — Vata, Pitta, and Kapha — each with different causes and different remedies. Here's how to identify yours and what actually helps.",
    content: `<p>This article explores natural pms relief: the ayurvedic approach by dosha type. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "eating-for-your-dosha",
    category: "article",
    title: "Eating for Your Dosha: The Ayurvedic Diet Guide for Vata, Pitta, and Kapha",
    date: "May 19, 2026",
    excerpt: "Ayurvedic eating isn't a diet — it's a framework for matching food to your constitution. Learn what to eat for Vata, Pitta, and Kapha doshas with practical, specific guidance.",
    seoTitle: "Eating for Your Dosha: The Ayurvedic Diet Guide for Vata, Pitta, and Kapha",
    seoDescription: "Ayurvedic eating isn't a diet — it's a framework for matching food to your constitution. Learn what to eat for Vata, Pitta, and Kapha doshas with practical, specific guidance.",
    content: `<p>This article explores eating for your dosha: the ayurvedic diet guide for vata, pitta, and kapha. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-hormonal-balance",
    category: "article",
    title: "Hormonal Imbalance Symptoms and Natural Remedies — Ayurvedic Guide",
    date: "May 21, 2026",
    excerpt: "I spent the better part of my twenties being told my hormones were 'normal.' Ayurveda lives in the gray zone between thriving and diagnosable — and it reframed everything I understood about hormones.",
    seoTitle: "Ayurveda for Hormonal Balance: What the Ancient System Gets Right",
    seoDescription: "Ayurveda offers a sophisticated framework for women's hormonal health — from dosha-specific patterns to herbs like Shatavari and Ashwagandha. Here's what I've learned.",
    content: `<p>This article explores hormonal imbalance symptoms and natural remedies — ayurvedic guide. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-meat-fish",
    category: "article",
    title: "Can You Eat Meat on an Ayurvedic Diet? What the Classical Texts Say",
    date: "May 26, 2026",
    excerpt: "The vegetarian Ayurveda most people know is a modern Western construction. The classical texts call meat nourishing and even medicinal — here's the real, dosha-specific picture.",
    seoTitle: "Can You Eat Meat and Fish on an Ayurvedic Diet? The Answer Is More Complicated Than You Think.",
    seoDescription: "The vegetarian Ayurveda most people know is a modern Western construction. The classical texts call meat nourishing and even medicinal — here's the real, dosha-specific picture.",
    content: `<p>This article explores can you eat meat on an ayurvedic diet? what the classical texts say. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-alcohol",
    category: "article",
    title: "Alcohol and Ayurveda: What the Classical Texts Actually Say",
    date: "May 27, 2026",
    excerpt: "Before you assume Ayurveda tells you to stop drinking, know this: the classical texts contain entire chapters on fermented drinks. Here's the nuanced, dosha-specific picture.",
    seoTitle: "Ayurveda Has Its Own Version of Alcohol. Here's What the Texts Actually Say.",
    seoDescription: "Before you assume Ayurveda tells you to stop drinking, know this: the classical texts contain entire chapters on fermented drinks. Here's the nuanced, dosha-specific picture.",
    content: `<p>This article explores alcohol and ayurveda: what the classical texts actually say. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-ice-water",
    category: "article",
    title: "Why Cold Water Causes Bloating — The Ayurvedic Explanation",
    date: "May 28, 2026",
    excerpt: "Warm water, never ice. It's one of the most consistent recommendations in Ayurveda — and once you understand agni, digestive fire, it's hard to go back.",
    seoTitle: "Why Ayurveda Says You Should Never Drink Ice Water (And Why It's Probably Right)",
    seoDescription: "Warm water, never ice. It's one of the most consistent recommendations in Ayurveda — and once you understand agni, digestive fire, it's hard to go back.",
    content: `<p>This article explores why cold water causes bloating — the ayurvedic explanation. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-exercise",
    category: "article",
    title: "Why Working Out the Same Way Every Day Is Making You Worse (According to Ayurveda)",
    date: "May 29, 2026",
    excerpt: "Ayurveda treats exercise as constitution-specific, not universal. Here's what each dosha actually needs, when to train, and why recovery matters as much as exertion.",
    seoTitle: "Why Working Out the Same Way Every Day Is Making You Worse (According to Ayurveda)",
    seoDescription: "Ayurveda treats exercise as constitution-specific, not universal. Here's what each dosha actually needs, when to train, and why recovery matters as much as exertion.",
    content: `<p>This article explores why working out the same way every day is making you worse (according to ayurveda). Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-sex",
    category: "article",
    title: "Ayurvedic Guide to Vitality and Sexual Health: Vajikarana Explained",
    date: "May 30, 2026",
    excerpt: "Vajikarana is the eighth classical branch of Ayurveda, dedicated to sexual health and vitality. Here's what the texts actually say — about Ojas, doshas, and the herbs.",
    seoTitle: "The Branch of Ayurveda Nobody Talks About: Sex, Vitality, and Vajikarana",
    seoDescription: "Vajikarana is the eighth classical branch of Ayurveda, dedicated to sexual health and vitality. Here's what the texts actually say — about Ojas, doshas, and the herbs.",
    content: `<p>This article explores ayurvedic guide to vitality and sexual health: vajikarana explained. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-aging",
    category: "article",
    title: "Why Your 40s Feel Different: The Ayurvedic Stages of Life Explained",
    date: "May 31, 2026",
    excerpt: "Ayurveda divides life into three dosha-governed stages. Understanding the Pitta-to-Vata transition explains why your 40s feel different — and how to work with it.",
    seoTitle: "Why Your 40s Are Supposed to Feel Different: The Ayurvedic Map of Life",
    seoDescription: "Ayurveda divides life into three dosha-governed stages. Understanding the Pitta-to-Vata transition explains why your 40s feel different — and how to work with it.",
    content: `<p>This article explores why your 40s feel different: the ayurvedic stages of life explained. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-coffee",
    category: "article",
    title: "Is Coffee Bad for You? The Ayurvedic Answer by Dosha",
    date: "May 20, 2026",
    excerpt: "The question I get asked most often when I tell people I've been at an Ayurvedic retreat is: 'Can you still have coffee?' The answer is nuanced, which is very Ayurvedic of it.",
    seoTitle: "The Ayurvedic Take on Coffee: Should You Drink It or Give It Up?",
    seoDescription: "Ayurveda has a nuanced take on coffee — it depends on your dosha. Here's how coffee affects Vata, Pitta, and Kapha types, and how to make it work better for your constitution.",
    content: `<p>This article explores is coffee bad for you? the ayurvedic answer by dosha. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurveda-cold-smoothies",
    category: "article",
    title: "Are Cold Smoothies Bad for Digestion? What Ayurveda Says",
    date: "May 18, 2026",
    excerpt: "I drank a green smoothie every morning for three years. Then I sat with an Ayurvedic practitioner in Kerala and she said: 'That explains the bloating.'",
    seoTitle: "Why Ayurveda Doesn't Recommend Cold Smoothies (And What to Eat Instead)",
    seoDescription: "Ayurveda says cold smoothies suppress digestive fire — and the science of agni explains why. Here's what to eat for breakfast instead, according to your dosha.",
    content: `<p>This article explores are cold smoothies bad for digestion? what ayurveda says. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "kapha-dosha-guide",
    category: "article",
    title: "Kapha Dosha: Why You Feel Stuck, Sluggish, and What Actually Helps",
    date: "May 17, 2026",
    excerpt: "Kapha is the dosha nobody talks about. Here's what I've learned: Kapha imbalance isn't a character flaw. It's an energetic pattern with specific causes and solutions.",
    seoTitle: "Kapha Dosha: Why You Feel Sluggish and What Actually Helps",
    seoDescription: "Kapha dosha governs stability, structure, and endurance. Learn the signs of Kapha imbalance — sluggishness, weight gain, low motivation — and how to get your energy moving again.",
    content: `<p>This article explores kapha dosha: why you feel stuck, sluggish, and what actually helps. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "pitta-dosha-guide",
    category: "article",
    title: "Pitta Dosha: The High-Achiever's Guide to Cooling Down",
    date: "May 16, 2026",
    excerpt: "The first time someone described Pitta to me, I laughed. Not because it was wrong. Because it was so accurate it was slightly embarrassing.",
    seoTitle: "Pitta Dosha: Signs of Imbalance and How to Cool Down",
    seoDescription: "Pitta dosha governs fire, digestion, and ambition. Learn the signs of Pitta imbalance — inflammation, irritability, burnout — and exactly how to bring it back into balance.",
    content: `<p>This article explores pitta dosha: the high-achiever's guide to cooling down. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "vata-dosha-guide",
    category: "article",
    title: "Vata Dosha: Signs You're Out of Balance and What To Do About It",
    date: "May 15, 2026",
    excerpt: "I used to think anxiety was just my personality. Then I got my dosha assessment and the practitioner said: 'Classic Vata imbalance.' Everything had a name — and a remedy.",
    seoTitle: "Vata Dosha: Signs You're Out of Balance and How to Fix It",
    seoDescription: "Vata dosha governs movement, creativity, and the nervous system. Learn the signs of Vata imbalance — anxiety, dry skin, insomnia — and exactly how to bring it back into balance.",
    content: `<p>This article explores vata dosha: signs you're out of balance and what to do about it. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "ayurvedic-herbs-guide",
    category: "article",
    title: "The Ayurvedic Herb Guide: What's Actually in These Formulas and Why",
    date: "May 28, 2026",
    excerpt: "I'm sitting in a pharmacy that's been operating for over 200 years. Here's what I learned about the herbs that show up in every Ayurvedic formula — and why they work.",
    seoTitle: "Ayurvedic Herbs: A Practical Guide to Ashwagandha, Triphala, Brahmi & More",
    seoDescription: "A practical guide to the most important Ayurvedic herbs — what they do, the evidence behind them, and how to match them to your dosha type.",
    content: `<p>This article explores the ayurvedic herb guide: what's actually in these formulas and why. Ayurveda offers a unique perspective on this topic that considers your individual constitution and imbalances.</p><p>Continue reading to discover how this approach can support your wellness journey.</p>`,
  },
  {
    slug: "why-you-wake-up-at-3am",
    category: "article",
    title: "Why You Wake Up at 3am: The Ayurvedic Explanation",
    date: "May 11, 2026",
    excerpt: "Waking at 3am with a racing mind is a Vata pattern in Ayurveda — not just stress. Here is why it happens and the specific interventions that actually stop it.",
    seoTitle: "Why You Wake Up at 3am: The Ayurvedic Explanation",
    seoDescription: "Waking at 3am with a racing mind is a Vata pattern in Ayurveda — not just stress. Here is why it happens and the specific interventions that actually stop it.",
    content: `<p>3am. You are awake. Your mind is already running. Not gently either — fully operational, processing things that felt manageable at 10pm and somehow feel catastrophic now. You lie there trying to will yourself back to sleep and the more you try the more awake you become. This pattern is so common it has become normalised. Most people who experience it assume it is stress, or getting older, or just how they are. Ayurveda has a more specific explanation — and a more specific set of solutions.</p>
<h2>What Ayurveda Says Is Happening at 3am.</h2>
<p>The Ayurvedic clock divides the day and night into dosha periods. Vata time runs from 2am to 6am. Vata is the dosha of air and ether — mobile, light, cold, and irregular. It governs the nervous system and the mind's tendency to generate thought rapidly. When you wake at 3am, you are waking into peak Vata time. If your Vata is already elevated — from chronic stress, irregular eating, poor sleep habits, too much stimulation, or systemic depletion — the Vata energy of this window amplifies whatever nervous system activation is already present. The mind engages. Thoughts accelerate. Sleep becomes impossible. The reason the thoughts feel more intense and more catastrophic at 3am than before bed is not psychological drama. It is the Vata amplification of an already-dysregulated nervous system meeting its most active window.</p>
<h2>Why Pitta Time Matters Too.</h2>
<p>Pitta time runs from 10pm to 2am — the period when the body is doing its primary metabolic and processing work. The liver is detoxifying. The mind, if still active during this window, tends to engage in the kind of focused analytical processing that Pitta governs. For people who go to sleep late — after 10pm — the mind often gets a second wind. This Pitta activation can carry through into the early hours, and when Vata time begins at 2am, the transition from Pitta processing to Vata anxiety is a common pattern behind 3am waking. The fix in Ayurvedic terms is to be asleep before Pitta time activates — before 10pm.</p>
<h2>Other Contributing Factors.</h2>
<p>Blood sugar instability is one of the most underappreciated causes. When blood sugar drops during the night, the body releases cortisol to compensate. Cortisol spikes are activating — they reliably wake people up. Liver congestion is another — the liver's peak processing window of 1-3am, when overburdened by alcohol or chronic inflammation, can produce a general sense of unease that wakes you. Cortisol dysregulation is the third major factor — in people with chronically elevated cortisol, the normal early-morning cortisol rise sometimes activates too early.</p>
<h2>What to Do About It.</h2>
<p>Go to sleep before 10pm — the most impactful single change. Getting into bed before Pitta time activates means transitioning into deep sleep during Kapha time when the gravitational pull toward rest is strongest. Ashwagandha at night — its cortisol-regulating action directly addresses the cortisol dysregulation driving 3am waking. Give it 4-6 weeks. Jatamansi specifically for this pattern — the Himalayan root used specifically for insomnia and mental unrest, particularly the pattern of waking in the night with an activated mind. Eat dinner before 7pm — late eating forces the digestive system to remain active during rest, directly disturbing sleep. Reduce alcohol — the metabolic processing of alcohol between 2am and 4am produces the arousal response that wakes you. Warm milk with nutmeg before bed — a small amount of nutmeg in warm milk has mild sedative properties and is nourishing to the Vata nervous system.</p>
<h2>The Pattern Is Information.</h2>
<p>The 3am wake-up in Ayurvedic terms is not a malfunction. It is the nervous system reporting its state. A system that is well-nourished, properly timed, and adequately regulated does not activate dramatically at 3am. The solutions are not dramatic — consistent sleep timing, warm nourishing food, appropriate herbs, and reducing the inputs that prevent the system from doing what it already knows how to do.</p>
<div style={{ marginTop: "48px", padding: "32px", backgroundColor: "#f5ede1", border: "1px solid #e8d9c5", borderLeft: "4px solid #8a7a5a", borderRadius: "6px" }}>
  <p style={{ fontSize: "16px", fontWeight: 600, color: "#2c1a0e", marginBottom: "16px" }}>Find your dosha and personalize your approach</p>
  <a href="/quiz" style={{ display: "inline-block", backgroundColor: "#8a7a5a", color: "#fdf8f3", padding: "12px 24px", borderRadius: "24px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Take the Free Dosha Quiz →</a>
</div>`,
  },
  {
    slug: "ayurveda-overthinking",
    category: "article",
    title: "Ayurveda for Overthinking: Why Your Mind Won't Stop (And What Actually Helps)",
    date: "May 12, 2026",
    excerpt: "Overthinking is a Vata disorder in Ayurveda — not a character flaw. Here are the herbs, practices, and lifestyle changes that actually quiet a racing mind.",
    seoTitle: "Ayurveda for Overthinking: Why Your Mind Won't Stop (And What Actually Helps)",
    seoDescription: "Overthinking is a Vata disorder in Ayurveda — not a character flaw. Here are the herbs, practices, and lifestyle changes that actually quiet a racing mind.",
    content: `<p>Overthinking is not a character flaw. It is a physiological state — a nervous system running at a frequency that generates thought faster than it can process it, producing the looping, cycling, amplifying quality that most people who overthink will immediately recognise. Ayurveda has been treating this pattern for thousands of years. Not as a psychological problem. As a Vata disorder — a dysregulation of the force that governs movement, the nervous system, and the mind's tendency to generate and cycle through thought.</p>
<h2>The Ayurvedic Understanding of Overthinking.</h2>
<p>Vata is the dosha of air and ether. Its positive expressions are creativity, quick thinking, adaptability. Its excess expressions are racing thoughts, circular thinking, difficulty landing on decisions, and the particular exhaustion that comes from a mind generating content at high speed for too long. The mind in Ayurvedic terms is governed by three qualities: Sattva (clarity), Rajas (activity), and Tamas (heaviness). Overthinking is a Rajasic excess — too much mental movement, not enough settling. This maps directly onto elevated Vata. The factors that produce this state are the conditions of modern life: too much information input, too little physical movement, irregular eating, insufficient sleep, and stimulant reliance.</p>
<h2>Why Overthinking Worsens at Night.</h2>
<p>Vata time is 2-6am and 2-6pm. The afternoon window is when most overthinkers notice their first significant peak of mental cycling. The night window is when the 3am spiral happens. This is not coincidence or psychology — it is the Vata energy of those windows amplifying an already-elevated Vata nervous system. The person without elevated Vata moves through these windows without disruption. The person with elevated Vata experiences them as the periods when the mind accelerates most dramatically.</p>
<h2>The Herbs.</h2>
<p>Brahmi (Bacopa monnieri) is the primary herb for overthinking — the classical Ayurvedic brain tonic used for the cooling and settling of mental activity. Its action is specifically on the mind: it reduces the sharp, active quality of Rajasic mental excess without dulling or sedating. Brahmi tea in the afternoon — during the 2-6pm Vata window when overthinking peaks — is a consistent recommendation. Give it 6-8 weeks. Ashwagandha addresses the adrenal and cortisol component of overthinking — the stress response feeds the mental activation which produces more cortisol which feeds more activation. Take nightly. Jatamansi is used specifically for mental unrest — the particular quality of mental agitation that does not correspond to external circumstances. Shankhpushpi is one of the most specific classical herbs for mental agitation and the cycling quality of an overactive mind.</p>
<h2>Lifestyle Interventions.</h2>
<p>Move the body before trying to settle the mind — physical movement reduces mental activation more reliably than any other intervention. A 20-minute walk before attempting meditation or sleep produces better outcomes than attempting either without it. Reduce information input deliberately — news, social media, stimulating conversations in the evening all provide material for the Rajasic mind to cycle through. Eat at regular times — blood sugar instability produces cortisol spikes throughout the day and night that are a significant driver of mental restlessness. Write it down — giving the mobile Vata quality a direction by recording whatever is circling before bed reduces the load on the mind during sleep.</p>
<h2>What Does Not Help.</h2>
<p>More thinking — overthinking does not resolve through more thinking. It resolves through nervous system regulation, which is physiological not cognitive. Alcohol — the temporary sedation is followed by Vata rebound that makes mental cycling worse. Coffee after 2pm — the Vata window (2-6pm) is when caffeine and overthinking are most mutually amplifying.</p>
<div style={{ marginTop: "48px", padding: "32px", backgroundColor: "#f5ede1", border: "1px solid #e8d9c5", borderLeft: "4px solid #8a7a5a", borderRadius: "6px" }}>
  <p style={{ fontSize: "16px", fontWeight: 600, color: "#2c1a0e", marginBottom: "16px" }}>Find your dosha and personalize your approach</p>
  <a href="/quiz" style={{ display: "inline-block", backgroundColor: "#8a7a5a", color: "#fdf8f3", padding: "12px 24px", borderRadius: "24px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Take the Free Dosha Quiz →</a>
</div>`,
  },
  {
    slug: "ashwagandha-vs-brahmi",
    category: "article",
    title: "Ashwagandha vs Brahmi: Which Ayurvedic Herb Do You Actually Need?",
    date: "May 13, 2026",
    excerpt: "Ashwagandha and Brahmi are both adaptogens but they work completely differently. Here is the clear distinction — and when to use each one.",
    seoTitle: "Ashwagandha vs Brahmi: Which Ayurvedic Herb Do You Actually Need?",
    seoDescription: "Ashwagandha and Brahmi are both adaptogens but they work completely differently. Here is the clear distinction — and when to use each one.",
    content: `<p>Both are among the most important herbs in the Ayurvedic pharmacopoeia. Both are adaptogens. Both are used for stress, cognitive function, and nervous system support. Both are increasingly well-researched in Western clinical literature. They are not the same thing, and using the wrong one for the wrong condition produces suboptimal results. Here is the clear distinction.</p>
<h2>Ashwagandha: The Body-First Adaptogen.</h2>
<p>Ashwagandha works primarily on the adrenal system and the HPA axis — the pathway that regulates the body's stress response. Its primary mechanism is cortisol modulation. Multiple clinical trials have demonstrated statistically significant reductions in serum cortisol, improvements in sleep quality, and reductions in anxiety scores with consistent use. In Ayurvedic terms it is a Rasayana — a rejuvenating tonic that nourishes ojas, builds tissue, and strengthens the body's reserves. It is warming, grounding, and deeply nourishing. The conditions it is most suited for: physical depletion and fatigue from overwork; cortisol dysregulation and the wired-but-tired pattern; testosterone and reproductive health in men; anxiety rooted in depletion. Dosha fit: primarily Vata, secondarily Kapha. Pitta types should use with caution.</p>
<h2>Brahmi: The Mind-First Adaptogen.</h2>
<p>Brahmi works primarily on the brain and cognitive function. Its mechanisms include antioxidant effects on neural tissue and modulation of neurotransmitter systems. In Ayurvedic terms it is the primary Medhya Rasayana — a brain-specific rejuvenator that enhances knowledge acquisition, retention, and recall. It is cooling, clarifying, and specific to the mental functions. The conditions it is most suited for: brain fog and cognitive sluggishness; mental anxiety — the specific pattern of overthinking, cycling thoughts, and mental restlessness; Pitta mental excess — the intense overheated quality of a Pitta mind; learning and study. The clinical evidence for Brahmi is among the strongest in the Ayurvedic literature. Dosha fit: primarily Pitta, secondarily Vata. More appropriate for Pitta than Ashwagandha.</p>
<h2>When to Use Both.</h2>
<p>The combination is one of the more powerful pairings in Ayurvedic practice because they address the stress-anxiety pattern from two different angles simultaneously. Ashwagandha addresses the physiological stress response — cortisol, adrenal function, body-level depletion, sleep architecture. Brahmi addresses the mental expression of that stress — racing thoughts, cycling anxiety, cognitive dulling. For someone dealing with burnout or chronic stress-driven anxiety — taking Ashwagandha at night and Brahmi in the afternoon produces effects that neither herb produces alone.</p>
<h2>Practical Protocol.</h2>
<p>Ashwagandha: 300-600mg root extract or half a teaspoon of root powder in warm milk, taken at night before bed. Brahmi: 300mg standardised extract or Brahmi leaf tea, taken in the afternoon during the 2-6pm Vata window when mental activation tends to peak. Both herbs require consistency — meaningful results appear at 6-8 weeks of daily use. Neither is an acute intervention.</p>
<h2>The Simple Decision Tree.</h2>
<p>If the primary symptom is physical — fatigue, low energy, poor recovery, sleep disruption, depleted feeling — start with Ashwagandha. If the primary symptom is mental — brain fog, racing thoughts, anxiety that is more cognitive than physical, difficulty concentrating — start with Brahmi. If both are present, which is common in burnout — use both, with Ashwagandha at night and Brahmi in the afternoon. If you run hot, get angry easily, have inflammatory skin conditions or acid reflux — favour Brahmi over Ashwagandha.</p>
<div style={{ marginTop: "48px", padding: "32px", backgroundColor: "#f5ede1", border: "1px solid #e8d9c5", borderLeft: "4px solid #8a7a5a", borderRadius: "6px" }}>
  <p style={{ fontSize: "16px", fontWeight: 600, color: "#2c1a0e", marginBottom: "16px" }}>Find your dosha and personalize your approach</p>
  <a href="/quiz" style={{ display: "inline-block", backgroundColor: "#8a7a5a", color: "#fdf8f3", padding: "12px 24px", borderRadius: "24px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Take the Free Dosha Quiz →</a>
</div>`,
  },
  {
    slug: "overstimulation-ayurveda",
    category: "article",
    title: "Overstimulation and Ayurveda: Why Modern Life Is Breaking Your Nervous System",
    date: "May 14, 2026",
    excerpt: "Overstimulation is a Vata disorder — the nervous system flooded with more input than it can process. Here is the Ayurvedic explanation and what actually helps.",
    seoTitle: "Overstimulation and Ayurveda: Why Modern Life Is Breaking Your Nervous System",
    seoDescription: "Overstimulation is a Vata disorder — the nervous system flooded with more input than it can process. Here is the Ayurvedic explanation and what actually helps.",
    content: `<p>There is a specific quality of exhaustion that is increasingly common and poorly understood. It is not tiredness from physical exertion. It is the particular depletion that comes from too much input — too much information, too much noise, too much connectivity, too many decisions, too many demands on attention from too many simultaneous directions. Ayurveda has a name for the constitutional type most vulnerable to this pattern, a clear explanation of its mechanism, and specific interventions that address it.</p>
<h2>The Vata Architecture of Overstimulation.</h2>
<p>Vata is the dosha of air and ether — the principle of movement, communication, and the nervous system's capacity to receive and process sensory information. Its vulnerability is this: it has no natural saturation point. Where Kapha has density that slows input and Pitta has fire that burns through it, Vata is genuinely open — it continues receiving stimulation without natural filtering. In an environment with limited stimulation, this openness is an asset. In modern life — which delivers a historically unprecedented volume of stimulation through screens, notifications, information, and ambient noise — it is a liability. The result is Vata excess: the nervous system remains in sustained activation with no natural off switch. The inputs keep coming. The reserves deplete. The threshold for overwhelm drops. The anxiety rises without a clear object.</p>
<h2>The Modern Amplifiers.</h2>
<p>Screens before bed — specifically designed to engage Vata's pattern-recognition and novelty-seeking tendencies. The algorithm does not stop. Social media specifically — the variable reward structure is the most reliably activating input available to modern humans. Remote and async work — the always-on quality maintains the nervous system in a state of low-level activation throughout the day that, over months and years, produces the Vata depletion underlying burnout. Commuting in stimulating environments — cities, airports, crowded spaces, noise — all genuine Vata aggravators that accumulate across the day.</p>
<h2>The Physical Signs That Overstimulation Has Gone Too Far.</h2>
<p>Decreased tolerance for noise — the person previously comfortable in loud environments now finds them physically uncomfortable. Sensory sensitivity — light seems brighter, smells more intense. Decision fatigue that arrives earlier in the day than it used to. The inability to be bored — the nervous system has lost the capacity to tolerate the absence of input. Emotional reactivity disproportionate to events — small things trigger large responses because the regulation capacity has been depleted.</p>
<h2>The Interventions.</h2>
<p>Deliberate sensory reduction — periods of genuine silence, walking without headphones, eating without screens. The nervous system does not recover in the presence of continued stimulation. It recovers in its absence. Abhyanga — warm oil massage — produces documented reductions in cortisol and inflammatory markers. Ten minutes of self-massage before a shower daily. Ashwagandha for the adrenal depletion — take nightly. Consistent meals at consistent times. Sleep before 10pm. Reduce caffeine after noon.</p>
<h2>The Paradox of Recovery.</h2>
<p>The particular challenge of nervous system overstimulation is that the recovery practices — stillness, silence, slow sensory experience — are the practices that feel most uncomfortable to the overstimulated system. The person who most needs to sit in silence for ten minutes is the person who finds ten minutes of silence almost intolerable. The intervention is not waiting until it feels comfortable. It is doing it anyway, briefly, consistently, and allowing the tolerance to build over weeks.</p>
<div style={{ marginTop: "48px", padding: "32px", backgroundColor: "#f5ede1", border: "1px solid #e8d9c5", borderLeft: "4px solid #8a7a5a", borderRadius: "6px" }}>
  <p style={{ fontSize: "16px", fontWeight: 600, color: "#2c1a0e", marginBottom: "16px" }}>Find your dosha and personalize your approach</p>
  <a href="/quiz" style={{ display: "inline-block", backgroundColor: "#8a7a5a", color: "#fdf8f3", padding: "12px 24px", borderRadius: "24px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Take the Free Dosha Quiz →</a>
</div>`,
  },
  {
    slug: "how-to-fix-sleep-schedule",
    category: "article",
    title: "How to Fix Your Sleep Schedule with Ayurveda",
    date: "May 15, 2026",
    excerpt: "Ayurveda says when you sleep matters as much as how long. Here is the dosha clock, why late sleep produces less recovery, and a 4-week protocol for shifting your schedule.",
    seoTitle: "How to Fix Your Sleep Schedule with Ayurveda",
    seoDescription: "Ayurveda says when you sleep matters as much as how long. Here is the dosha clock, why late sleep produces less recovery, and a 4-week protocol for shifting your schedule.",
    content: `<p>Most sleep advice focuses on duration. Eight hours. Seven hours. A consistent number of hours. Ayurveda has a more interesting position: the hours you sleep matter as much as how many you sleep, and the biological window you use determines the quality of recovery you get from those hours regardless of their quantity. This is not a fringe view. It is increasingly well-supported by circadian biology research. But Ayurveda articulated the underlying logic thousands of years before the research confirmed it.</p>
<h2>The Dosha Clock and Sleep.</h2>
<p>Ayurveda divides the 24-hour cycle into six four-hour periods. Kapha time 6pm to 10pm: Kapha is heavy, slow, dense, and stable. Its qualities naturally incline the body toward rest and the slowing that precedes sleep. The body's gravitational pull toward unconsciousness is strongest during this window. Pitta time 10pm to 2am: the body's most active internal processing window. The liver is doing primary detoxification work. The immune system is most active. Vata time 2am to 6am: Vata is mobile, light, and activating. The nervous system's most alert period. Going to sleep during Kapha time means using the body's natural gravitational pull into rest. Going to sleep after 10pm means sleeping after Pitta time has activated the processing functions — the body is now working rather than resting.</p>
<h2>Why Late Sleep Produces Less Recovery.</h2>
<p>The second wind phenomenon — the surge of alertness around 10-11pm — is Pitta engaging. This feels like energy but it is the energy of a furnace stoking for processing work, not a body ready for regenerative rest. People who habitually sleep late report needing more hours to feel rested. The Ayurvedic explanation is that late-window sleep is not as restorative per hour as early-window sleep because the Kapha quality that produces deep heavy regenerative rest is most present in the early part of the night.</p>
<h2>The Protocol for Shifting Your Sleep Schedule.</h2>
<p>Week one: Move to bed 15 minutes earlier than your current time. Week two: another 15 minutes. Week three: another 15 minutes. Week four: final 15 minutes. This gradual approach — 15 minutes per week rather than the dramatic shift most people attempt — works with the nervous system's natural adjustment capacity rather than against it. The destination is consistently asleep before 10pm.</p>
<h2>What Makes Early Sleep Difficult.</h2>
<p>The Pitta second wind is real — the surge of energy that arrives around 10-11pm. For Pitta-dominant people, this is their most creative and productive window. The pattern is to work through it. The issue is that working through the Pitta window trains the body to remain active during that period, cementing the late-sleep pattern. Breaking this requires conscious decision to not work during this window and transition into genuine wind-down practices.</p>
<h2>Ayurvedic Evening Practices for Sleep.</h2>
<p>Begin at 9pm. Warm oil massage to the feet — 5 minutes. Warm milk with cardamom, nutmeg, and a small amount of ashwagandha, taken at 9:15pm. Reading or journaling — no screens — until 9:45pm. Bed by 10pm. This creates a consistent signal to the nervous system that sleep is coming. Consistency is more important than any individual element.</p>
<h2>The Result.</h2>
<p>After 4-6 weeks of consistent early sleep, most people report needing fewer total hours to feel rested, better energy throughout the day, improved digestion, and decreased anxiety. The changes are not subtle. They are among the most significant shifts that changing sleep timing produces.</p>
<div style={{ marginTop: "48px", padding: "32px", backgroundColor: "#f5ede1", border: "1px solid #e8d9c5", borderLeft: "4px solid #8a7a5a", borderRadius: "6px" }}>
  <p style={{ fontSize: "16px", fontWeight: 600, color: "#2c1a0e", marginBottom: "16px" }}>Find your dosha and personalize your approach</p>
  <a href="/quiz" style={{ display: "inline-block", backgroundColor: "#8a7a5a", color: "#fdf8f3", padding: "12px 24px", borderRadius: "24px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Take the Free Dosha Quiz →</a>
</div>`,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllPosts(): Post[] {
  return posts
}
