/**
 * Sentinel Dominion - Lojistik Operasyon Merkezi (Features)
 * Bu dosya, insani yardım lojistiği için kritik hesaplamaları içerir.
 */

// 1. Aciliyet Skoru Hesaplama (Urgency Score)
// Afet bölgesindeki nüfus ve hasar durumuna göre öncelik belirler.
export const calculateUrgencyScore = (population, damageLevel) => {
    // Hasar seviyesi 1-10 arası varsayılır
    const urgency = (population * 0.4) + (damageLevel * 0.6);
    return urgency.toFixed(2);
};

// 2. Karbon Ayak İzi Hesaplama (Green Logistics)
// Taşıma moduna göre çevre etkisini hesaplar.
export const calculateCarbonFootprint = (distance, transportType) => {
    const coefficients = {
        'road': 0.21,  // kg CO2 per km
        'rail': 0.05,
        'sea': 0.01
    };
    return (distance * (coefficients[transportType] || 0.21)).toFixed(2);
};

// 3. Rota Optimizasyon Kontrolü
// Belirlenen rotanın güvenli olup olmadığını denetler.
export const checkRouteSafety = (isBlocked, weatherCondition) => {
    if (isBlocked || weatherCondition === 'severe') {
        return { safe: false, message: "Rota kapalı veya hava koşulları tehlikeli!" };
    }
    return { safe: true, message: "Rota sevkiyat için uygundur." };
};

// 4. Modal Shift (Taşıma Modu Değişimi) Önerisi
// Mesafe ve hıza göre en verimli taşıma yöntemini seçer.
export const suggestTransportMode = (distance) => {
    if (distance > 1000) return "Sea / Rail (Multimodal)";
    if (distance > 500) return "Rail";
    return "Road";
};
