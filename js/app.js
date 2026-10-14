// Al-Fateh Motors (الفتح موٹرز) - Interactive Application Logic

const BIKES_DATA = [
  {
    id: 1,
    name: "Honda CG 125",
    nameUrdu: "ہونڈا سی جی 125 (زیرو میٹر)",
    condition: "new",
    brand: "honda",
    year: "2026",
    price: "PKR 234,900",
    engine: "125cc 4-Stroke",
    mileage: "0 km (Zero Meter)",
    registration: "Unregistered (Apply for Own Name)",
    color: "Vibrant Red",
    rating: "10/10 (Brand New)",
    badge: "Top Seller",
    badgeColor: "bg-red-600",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    description: "Brand new Honda CG 125 2026 model with company warranty, original invoice, and ready for instant delivery in Rahim Yar Khan.",
    features: ["Company Warranty Included", "Original Showroom Invoice", "Zero Meter Genuine", "Classic CG Sound & Power", "Biometric on Buyer Name"]
  },
  {
    id: 2,
    name: "Honda CD 70",
    nameUrdu: "ہونڈا سی ڈی 70 (ماڈل 2026)",
    condition: "new",
    brand: "honda",
    year: "2026",
    price: "PKR 157,900",
    engine: "72cc 4-Stroke OHC",
    mileage: "0 km (Zero Meter)",
    registration: "Unregistered",
    color: "Classic Black & Red",
    rating: "10/10 (Brand New)",
    badge: "Best Fuel Economy",
    badgeColor: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    description: "The nation's most trusted fuel saver! Brand new Honda CD 70 2026 with 55+ km/l average. Perfect for daily commute.",
    features: ["Brand New Zero Meter", "Factory Sealed Engine", "Unbeatable Fuel Mileage", "3 Years Free Service Book", "Instant Delivery"]
  },
  {
    id: 3,
    name: "Honda CG 125 Special Edition (Self Start)",
    nameUrdu: "ہونڈا سی جی 125 سپیشل ایڈیشن (سیلف سٹارٹ 5 سپیڈ)",
    condition: "new",
    brand: "honda",
    year: "2026",
    price: "PKR 282,900",
    engine: "125cc Euro-II 5-Speed",
    mileage: "0 km (Zero Meter)",
    registration: "Unregistered",
    color: "Matt Black & Gold",
    rating: "10/10 (Brand New)",
    badge: "Premium Edition",
    badgeColor: "bg-amber-600",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
    description: "Exclusive Special Edition featuring electric self-start, 5-speed transmission, upgraded exhaust muffler, and premium styling.",
    features: ["Electric Self-Start", "5-Speed Smooth Gearbox", "Sporty Alloy/Styling", "Showroom Invoice Ready", "Maximum Comfort"]
  },
  {
    id: 4,
    name: "Yamaha YBR 125G",
    nameUrdu: "یاماہا وائی بی آر 125 جی (بہترین کنڈیشن)",
    condition: "used",
    brand: "yamaha",
    year: "2024",
    price: "PKR 345,000",
    engine: "125cc OHC Balanced",
    mileage: "8,500 km",
    registration: "Rahim Yar Khan (RYK Number)",
    color: "Vivid Matte Black",
    rating: "9.8/10 (Mint)",
    badge: "Certified Used",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=800&q=80",
    description: "Single-hand used Yamaha YBR 125G in Rahim Yar Khan. Original smart card, lifetime token paid, and 100% on-spot biometric guaranteed.",
    features: ["Original Smart Card", "Biometric on the Spot Guaranteed", "Tubeless Tyres in 95% condition", "Smooth Suspension & Disc Brake", "Single Owner Driven"]
  },
  {
    id: 5,
    name: "Suzuki GS 150",
    nameUrdu: "سوزوکی جی ایس 150 (فرسٹ اونر، شاہانہ سواری)",
    condition: "used",
    brand: "suzuki",
    year: "2023",
    price: "PKR 315,000",
    engine: "150cc 4-Stroke Air-Cooled",
    mileage: "12,200 km",
    registration: "Punjab Registered",
    color: "Metallic Silver",
    rating: "9.5/10",
    badge: "Touring Ready",
    badgeColor: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",
    description: "Heavy-duty cruiser for long-distance comfort and heavy power. Non-accidental, fully original engine sound, clean documentation.",
    features: ["150cc Raw Power", "Powerful Front Disc Brake", "All Original Body Panels", "Smart Card & Complete File", "Biometric Available"]
  },
  {
    id: 6,
    name: "Honda CD 70 Dream",
    nameUrdu: "ہونڈا سی ڈی 70 ڈریم (ماڈل 2023)",
    condition: "used",
    brand: "honda",
    year: "2023",
    price: "PKR 118,000",
    engine: "72cc Econotech",
    mileage: "14,000 km",
    registration: "Rahim Yar Khan",
    color: "Sporty Red",
    rating: "9.2/10",
    badge: "Budget Friendly",
    badgeColor: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    description: "Sleek aerodynamic headlight and sporty fuel tank. Carefully maintained with periodic oil changes every 800 km.",
    features: ["RYK Registered Number", "Original Book & Return File", "Tires & Battery in great shape", "Excellent 52+ km/l average", "Instant Biometric"]
  },
  {
    id: 7,
    name: "Union Star 70cc",
    nameUrdu: "یونین سٹار 70 سی سی (زیرو میٹر نیا ماڈل)",
    condition: "new",
    brand: "other",
    year: "2026",
    price: "PKR 102,000",
    engine: "70cc 4-Stroke",
    mileage: "0 km (Zero Meter)",
    registration: "Unregistered",
    color: "Jet Black with Gold Graphics",
    rating: "10/10 (Brand New)",
    badge: "Best Value for Money",
    badgeColor: "bg-teal-600",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    description: "Affordable, reliable, and high-performance 70cc motorcycle with full warranty and lowest maintenance costs.",
    features: ["Brand New 2026 Factory Pack", "Company Warranty & Free Service", "Affordable Spare Parts", "Very High Resale in RYK", "Instant Delivery"]
  },
  {
    id: 8,
    name: "Honda CG 125 (Used 2022)",
    nameUrdu: "ہونڈا 125 ماڈل 2022 (جینئین کنڈیشن)",
    condition: "used",
    brand: "honda",
    year: "2022",
    price: "PKR 175,000",
    engine: "125cc Euro-II",
    mileage: "19,800 km",
    registration: "Rahim Yar Khan",
    color: "Original Red",
    rating: "9.3/10",
    badge: "Verified Genuine",
    badgeColor: "bg-red-700",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    description: "Original showroom condition Honda 125, sound like brand new, genuine silencer, no mechanical work required at all.",
    features: ["100% Original Sealed Engine", "Rahim Yar Khan City Number", "Biometric Available Instantly", "Original Paint & Stickers", "New Tyres & Battery"]
  },
  {
    id: 9,
    name: "United US 100cc",
    nameUrdu: "یونائیٹڈ 100 سی سی (ماڈل 2024)",
    condition: "used",
    brand: "other",
    year: "2024",
    price: "PKR 108,000",
    engine: "100cc Powerful",
    mileage: "9,200 km",
    registration: "Punjab Registered",
    color: "Gloss Black",
    rating: "9.4/10",
    badge: "Family Favorite",
    badgeColor: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable seating, sturdy double cradle frame, and strong pulling power. Ideal for family and cargo transport.",
    features: ["Spacious Double Seat", "Excellent Suspension for Rural Roads", "Original Smart Card & File", "Clean Engine Condition", "Ready for Immediate Transfer"]
  }
];

const PHONE_NUMBER = "0300-4892167";
const WHATSAPP_NUMBER = "923004892167";

// State
let currentFilterCondition = "all";
let currentFilterBrand = "all";
let currentSearchQuery = "";

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderBikesGrid();
  setupFilterListeners();
  setupSearchListener();
  setupSellBikeForm();
  setupContactForm();
  setupMobileMenu();
  setupModalCloser();
});

// Render Bikes Grid
function renderBikesGrid() {
  const container = document.getElementById("bikesGridContainer");
  const countBadge = document.getElementById("bikesCountBadge");
  if (!container) return;

  const filteredBikes = BIKES_DATA.filter(bike => {
    // Condition filter
    if (currentFilterCondition !== "all" && bike.condition !== currentFilterCondition) {
      return false;
    }
    // Brand filter
    if (currentFilterBrand !== "all" && bike.brand !== currentFilterBrand) {
      return false;
    }
    // Search query
    if (currentSearchQuery.trim() !== "") {
      const q = currentSearchQuery.toLowerCase();
      const matchName = bike.name.toLowerCase().includes(q);
      const matchUrdu = bike.nameUrdu.toLowerCase().includes(q);
      const matchYear = bike.year.includes(q);
      const matchEngine = bike.engine.toLowerCase().includes(q);
      const matchReg = bike.registration.toLowerCase().includes(q);
      if (!matchName && !matchUrdu && !matchYear && !matchEngine && !matchReg) {
        return false;
      }
    }
    return true;
  });

  if (countBadge) {
    countBadge.textContent = `${filteredBikes.length} Bikes Available`;
  }

  if (filteredBikes.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-gray-900/40 rounded-2xl border border-gray-800">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-900/30 flex items-center justify-center text-red-400">
          <i class="fa-solid fa-motorcycle text-3xl"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">No Matching Bikes Found</h3>
        <p class="text-gray-400 max-w-md mx-auto mb-6">
          ہماری موجودہ لسٹنگ میں آپ کی تلاش کے مطابق بائیک دستیاب نہیں ہے۔ آپ براہ راست واٹس ایپ پر ہم سے رابطہ کر کے اپنی مطلوبہ بائیک کا پوچھ سکتے ہیں۔
        </p>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام علیکم الفتح موٹرز! میں مخصوص بائیک تلاش کر رہا ہوں، براہ کرم معلومات فراہم کریں۔')}"
           target="_blank"
           class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-900/40 transition">
          <i class="fa-brands fa-whatsapp text-xl"></i>
          Ask on WhatsApp (0300-4892167)
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredBikes.map(bike => {
    const isNew = bike.condition === "new";
    const conditionTag = isNew 
      ? `<span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"><i class="fa-solid fa-sparkles mr-1"></i> Brand New (زیرو میٹر)</span>`
      : `<span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30"><i class="fa-solid fa-certificate mr-1"></i> Certified Used (استعمال شدہ)</span>`;

    const waMessage = encodeURIComponent(`السلام علیکم الفتح موٹرز! میں "${bike.name} (${bike.year} - ${bike.condition.toUpperCase()})" میں دلچسپی رکھتا ہوں۔ برائے مہربانی اس کی فائنل قیمت اور دستیابی سے آگاہ فرمائیں۔ شکریہ!`);

    return `
      <div class="bike-card group bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-red-600/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-950/20 flex flex-col">
        <!-- Image & Badges -->
        <div class="relative h-56 overflow-hidden bg-slate-950">
          <img src="${bike.image}" alt="${bike.name}" class="bike-card-img w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40"></div>
          
          <!-- Top Badges -->
          <div class="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
            <span class="${bike.badgeColor} text-white text-xs font-extrabold uppercase px-3 py-1 rounded-lg tracking-wider shadow-md">
              ${bike.badge}
            </span>
            <span class="bg-black/70 backdrop-blur-md text-gray-200 text-xs px-2.5 py-1 rounded-lg border border-white/10 font-medium">
              <i class="fa-solid fa-calendar-days text-red-400 mr-1"></i>${bike.year}
            </span>
          </div>

          <!-- Bottom Price pill in image -->
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
            <span class="text-xs text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
              <i class="fa-solid fa-gauge-high mr-1 text-emerald-400"></i> ${bike.rating}
            </span>
            <div class="text-right">
              <span class="text-xs text-emerald-300 block font-medium">Demand Price</span>
              <span class="text-lg font-black text-white bg-slate-900/90 px-3 py-0.5 rounded-lg border border-emerald-500/30 text-emerald-400">
                ${bike.price}
              </span>
            </div>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <!-- Condition pill -->
            <div class="mb-2">
              ${conditionTag}
            </div>

            <!-- Title English & Urdu -->
            <h3 class="text-xl font-black text-white group-hover:text-red-400 transition-colors">
              ${bike.name}
            </h3>
            <p class="font-urdu text-sm text-gray-400 mb-3" dir="rtl">
              ${bike.nameUrdu}
            </p>

            <!-- Specs Grid -->
            <div class="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-4 text-xs">
              <div class="flex items-center gap-2 text-gray-300">
                <i class="fa-solid fa-bolt text-red-400 w-4"></i>
                <span class="truncate">${bike.engine}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-300">
                <i class="fa-solid fa-road text-amber-400 w-4"></i>
                <span class="truncate">${bike.mileage}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-300">
                <i class="fa-solid fa-id-card text-blue-400 w-4"></i>
                <span class="truncate">${bike.registration}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-300">
                <i class="fa-solid fa-palette text-purple-400 w-4"></i>
                <span class="truncate">${bike.color}</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-2 pt-2 border-t border-slate-800/80">
            <!-- WhatsApp button -->
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}"
               target="_blank"
               class="btn-shine w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition">
              <i class="fa-brands fa-whatsapp text-lg"></i>
              <span>Inquire on WhatsApp</span>
            </a>

            <!-- Quick View & Call -->
            <div class="grid grid-cols-2 gap-2">
              <button onclick="openBikeModal(${bike.id})"
                      class="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition">
                <i class="fa-solid fa-circle-info text-blue-400"></i>
                <span>Details (تفصیل)</span>
              </button>
              <a href="tel:${PHONE_NUMBER}"
                 class="py-2 px-3 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-red-500/30 transition">
                <i class="fa-solid fa-phone text-red-400"></i>
                <span>Call Now</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    `;
  }).join("");
}

// Filter Listeners
function setupFilterListeners() {
  // Condition filters
  const conditionButtons = document.querySelectorAll("[data-filter-condition]");
  conditionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      conditionButtons.forEach(b => {
        b.classList.remove("bg-red-600", "text-white");
        b.classList.add("bg-slate-800", "text-gray-300");
      });
      btn.classList.add("bg-red-600", "text-white");
      btn.classList.remove("bg-slate-800", "text-gray-300");

      currentFilterCondition = btn.getAttribute("data-filter-condition");
      renderBikesGrid();
    });
  });

  // Brand dropdown/buttons if any
  const brandButtons = document.querySelectorAll("[data-filter-brand]");
  brandButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      brandButtons.forEach(b => {
        b.classList.remove("border-emerald-500", "text-emerald-400", "bg-emerald-950/40");
        b.classList.add("border-slate-800", "text-gray-400");
      });
      btn.classList.add("border-emerald-500", "text-emerald-400", "bg-emerald-950/40");
      btn.classList.remove("border-slate-800", "text-gray-400");

      currentFilterBrand = btn.getAttribute("data-filter-brand");
      renderBikesGrid();
    });
  });
}

// Search Listener
function setupSearchListener() {
  const searchInput = document.getElementById("bikeSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.classList.toggle("hidden", currentSearchQuery === "");
      }
      renderBikesGrid();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      currentSearchQuery = "";
      clearBtn.classList.add("hidden");
      renderBikesGrid();
    });
  }
}

// Quick View Modal
window.openBikeModal = function(id) {
  const bike = BIKES_DATA.find(b => b.id === id);
  if (!bike) return;

  const modal = document.getElementById("bikeDetailModal");
  const modalContent = document.getElementById("bikeModalDetailsContent");
  if (!modal || !modalContent) return;

  const waMessage = encodeURIComponent(`السلام علیکم مخدوم سید شاداب حسین شاہ گیلانی صاحب! میں الفتح موٹرز پر موجود "${bike.name} (${bike.year} - ${bike.condition.toUpperCase()})" خریدنے میں دلچسپی رکھتا ہوں۔ براہ کرم فائنل ڈیل اور مکمل معلومات فراہم کریں۔ شکریہ!`);

  modalContent.innerHTML = `
    <div class="relative bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl">
      <!-- Close button -->
      <button onclick="closeBikeModal()" class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center transition border border-white/20">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <!-- Bike Image Banner -->
      <div class="relative h-64 sm:h-72 w-full bg-black overflow-hidden">
        <img src="${bike.image}" alt="${bike.name}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-black/60"></div>
        <div class="absolute bottom-4 left-6 right-6">
          <span class="${bike.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-md mb-2 inline-block">
            ${bike.badge}
          </span>
          <h2 class="text-2xl sm:text-3xl font-black text-white">${bike.name} (${bike.year})</h2>
          <p class="font-urdu text-base text-gray-300" dir="rtl">${bike.nameUrdu}</p>
        </div>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-6">
        <!-- Price & Demand -->
        <div class="flex items-center justify-between p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
          <div>
            <span class="text-xs text-gray-400 block uppercase tracking-wider">Demand Price</span>
            <span class="text-2xl font-black text-emerald-400">${bike.price}</span>
          </div>
          <div class="text-right">
            <span class="text-xs text-gray-400 block uppercase tracking-wider">Condition Status</span>
            <span class="text-sm font-bold text-white bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">${bike.rating}</span>
          </div>
        </div>

        <!-- Description -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Description & Inspection</h4>
          <p class="text-gray-300 text-sm leading-relaxed">${bike.description}</p>
        </div>

        <!-- Specifications Breakdown -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Specifications</h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div class="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span class="text-gray-400 text-xs block">Engine</span>
              <strong class="text-white text-sm">${bike.engine}</strong>
            </div>
            <div class="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span class="text-gray-400 text-xs block">Mileage</span>
              <strong class="text-white text-sm">${bike.mileage}</strong>
            </div>
            <div class="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span class="text-gray-400 text-xs block">Registration</span>
              <strong class="text-white text-sm">${bike.registration}</strong>
            </div>
            <div class="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span class="text-gray-400 text-xs block">Color</span>
              <strong class="text-white text-sm">${bike.color}</strong>
            </div>
          </div>
        </div>

        <!-- Guarantee Checklist -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Al-Fateh Verified Checklist</h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
            ${bike.features.map(f => `
              <li class="flex items-center gap-2 p-2 rounded-lg bg-slate-950/40 border border-slate-800/50">
                <i class="fa-solid fa-circle-check text-emerald-400"></i>
                <span>${f}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Dealer Contact Info -->
        <div class="p-4 rounded-2xl bg-gradient-to-r from-red-950/30 to-slate-950 border border-red-900/30 flex items-center justify-between">
          <div>
            <span class="text-xs text-red-400 font-semibold block">Dealership Owner</span>
            <strong class="text-white text-sm">مخدوم سید شاداب حسین شاہ گیلانی</strong>
            <span class="text-xs text-gray-400 block">Auto Market, Rahim Yar Khan</span>
          </div>
          <div class="text-right">
            <span class="text-xs text-gray-400 block">Helpline</span>
            <a href="tel:${PHONE_NUMBER}" class="text-sm font-bold text-red-400 hover:underline">${PHONE_NUMBER}</a>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}"
             target="_blank"
             class="btn-shine py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition">
            <i class="fa-brands fa-whatsapp text-xl"></i>
            <span>Book / Inquire on WhatsApp</span>
          </a>
          <a href="tel:${PHONE_NUMBER}"
             class="py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition">
            <i class="fa-solid fa-phone text-lg"></i>
            <span>Call 0300-4892167</span>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};

window.closeBikeModal = function() {
  const modal = document.getElementById("bikeDetailModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
};

function setupModalCloser() {
  const modal = document.getElementById("bikeDetailModal");
  if (!modal) return;
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeBikeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBikeModal();
    }
  });
}

// Sell Your Bike WhatsApp Form Generator
function setupSellBikeForm() {
  const form = document.getElementById("sellBikeForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const bikeMake = document.getElementById("sellMake")?.value || "";
    const bikeModelYear = document.getElementById("sellYear")?.value || "";
    const bikeCondition = document.getElementById("sellCondition")?.value || "";
    const regCity = document.getElementById("sellCity")?.value || "";
    const expectedPrice = document.getElementById("sellPrice")?.value || "";
    const sellerName = document.getElementById("sellName")?.value || "";
    const sellerPhone = document.getElementById("sellPhone")?.value || "";

    const text = `السلام علیکم الفتح موٹرز (مخدوم سید شاداب حسین شاہ گیلانی صاحب)!
میں اپنی بائیک فروخت کرنا چاہتا ہوں، تفصیلات درج ذیل ہیں:

🏍️ بائیک / کمپنی: ${bikeMake}
📅 ماڈل سال: ${bikeModelYear}
🔍 حالت / کنڈیشن: ${bikeCondition}
📍 رجسٹریشن شہر: ${regCity}
💰 متوقع ڈیمانڈ / قیمت: PKR ${expectedPrice}
👤 مالک کا نام: ${sellerName}
📞 رابطہ نمبر: ${sellerPhone}

براہ کرم اس کا معائنہ کر کے مجھے فائنل کیش آفر سے آگاہ فرمائیں۔ شکریہ!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });
}

// General Contact Form
function setupContactForm() {
  const form = document.getElementById("generalContactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName")?.value || "";
    const phone = document.getElementById("contactPhone")?.value || "";
    const interest = document.getElementById("contactInterest")?.value || "Buying a Bike";
    const message = document.getElementById("contactMessage")?.value || "";

    const text = `السلام علیکم الفتح موٹرز!
نام: ${name}
فون نمبر: ${phone}
موضوع / دلچسپی: ${interest}
پیغام: ${message}

(Sent from Al-Fateh Motors Website)`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  });
}

// Mobile Menu
function setupMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("mobileMenuClose");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}
