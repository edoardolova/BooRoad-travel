// --- LISTA UNICA DEI PARTECIPANTI ---
export const participants = [
  { id: 101, firstName: "Luca", lastName: "Bianchi", email: "luca.bianchi@example.com", phone: "1234567890", taxCode: "EMCNSIACN456AIO" },
  { id: 102, firstName: "Giulia", lastName: "Rossi", email: "giulia.rossi@example.com", phone: "1234567891", taxCode: "RSSGLI91A01F205X" },
  { id: 103, firstName: "Marco", lastName: "Verdi", email: "marco.verdi@example.com", phone: "1234567892", taxCode: "VRDMRC85C15H501Z" },
  { id: 104, firstName: "Chiara", lastName: "Conti", email: "chiara.conti@example.com", phone: "1234567893", taxCode: "CNTCHR92M41D612Y" },

  { id: 105, firstName: "Francesco", lastName: "Neri", email: "francesco.neri@example.com", phone: "1234567894", taxCode: "NREFRC88E22H501W" },
  { id: 106, firstName: "Elena", lastName: "Moretti", email: "elena.moretti@example.com", phone: "1234567895", taxCode: "MRTELN93T55H501Y" },
  { id: 107, firstName: "Davide", lastName: "Romano", email: "davide.romano@example.com", phone: "1234567896", taxCode: "RMNDVD87H12C351Z" },
  { id: 108, firstName: "Alessia", lastName: "Marini", email: "alessia.marini@example.com", phone: "1234567897", taxCode: "MRNLSS90D58L219V" },

  { id: 109, firstName: "Paolo", lastName: "Rinaldi", email: "paolo.rinaldi@example.com", phone: "1234567898", taxCode: "RNLPLO86R23A662H" },
  { id: 110, firstName: "Sara", lastName: "Galli", email: "sara.galli@example.com", phone: "1234567899", taxCode: "GLLSRA95A42B157F" },
  { id: 111, firstName: "Matteo", lastName: "Lombardi", email: "matteo.lombardi@example.com", phone: "1234567810", taxCode: "LMBMTT82H15F205D" },
  { id: 112, firstName: "Federica", lastName: "Barbieri", email: "federica.barbieri@example.com", phone: "1234567811", taxCode: "BRBFRC94M62H501L" },

  { id: 113, firstName: "Simone", lastName: "Ferrari", email: "simone.ferrari@example.com", phone: "1234567812", taxCode: "FRRSNM85C11F205K" },
  { id: 114, firstName: "Marta", lastName: "Gentile", email: "marta.gentile@example.com", phone: "1234567813", taxCode: "GNTMRT91A63F205V" },
  { id: 115, firstName: "Andrea", lastName: "Colombo", email: "andrea.colombo@example.com", phone: "1234567814", taxCode: "CLMAND89E15L219P" },
  { id: 116, firstName: "Laura", lastName: "Greco", email: "laura.greco@example.com", phone: "1234567815", taxCode: "GRCLRA93M45B157X" },

  { id: 117, firstName: "Riccardo", lastName: "De Luca", email: "riccardo.deluca@example.com", phone: "1234567816", taxCode: "DLCRCR90A01F205R" },
  { id: 118, firstName: "Valentina", lastName: "Fontana", email: "valentina.fontana@example.com", phone: "1234567817", taxCode: "FNTVLN92B62L219C" },
  { id: 119, firstName: "Stefano", lastName: "Marchetti", email: "stefano.marchetti@example.com", phone: "1234567818", taxCode: "MRCSFN88T45F205U" },
  { id: 120, firstName: "Ilaria", lastName: "Giordano", email: "ilaria.giordano@example.com", phone: "1234567819", taxCode: "GRDILR94D58H501J" }
];

// --- LISTA DEI VIAGGI ---
// array partecipanti con solo l'id 
export const trips = [
    {
        id: 1,
        destination: "Roma",
        startDate: "2025-09-01",
        endDate: "2025-09-05",
        participants: [101, 102, 103, 104],
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        destination: "Milano",
        startDate: "2025-10-10",
        endDate: "2025-10-15",
        participants: [105, 106, 107, 108],
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        destination: "Firenze",
        startDate: "2025-11-20",
        endDate: "2025-11-25",
        participants: [109, 110, 111, 112],
        img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        destination: "Napoli",
        startDate: "2025-12-05",
        endDate: "2025-12-10",
        participants: [113, 114, 115, 116],
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        destination: "Torino",
        startDate: "2026-01-15",
        endDate: "2026-01-20",
        participants: [117, 118, 119, 120],
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    }
];
