import {
    MdOutlineMiscellaneousServices    
  } from "react-icons/md";

import {
    VscWorkspaceTrusted    
  } from "react-icons/vsc";
  
import {
    BsEmojiSmile    
  } from "react-icons/bs";
  
 import {
    MdOutlineDeliveryDining    
  } from "react-icons/md"; 

const services = [
    {
      id: 1,
      title: "KALİTELİ HİZMET",
      description:
        "Bizim için özverili, disiplinli ve müşteri odaklı çalışmadan doğan, kalitenin en değerlisi müşteridir.",
      icon: <MdOutlineMiscellaneousServices className="icon"/>,
    },
    {
      id: 2,
      title: "KARŞILIKLI GÜVEN",
      description:
        "Bizim için özverili, disiplinli ve müşteri odaklı çalışmadan doğan, kalitenin en değerlisi müşteridir.",
      icon: <VscWorkspaceTrusted className="icon"/>,
    },
    {
      id: 3,
      title: "MEMNUNİYET",
      description:
        "Bizim için özverili, disiplinli ve müşteri odaklı çalışmadan doğan, kalitenin en değerlisi müşteridir.",
      icon: <BsEmojiSmile className="icon"/>,
    },
    {
      id: 4,
      title: "HIZLI TESLİMAT",
      description:
        "Bizim için özverili, disiplinli ve müşteri odaklı çalışmadan doğan, kalitenin en değerlisi müşteridir.",
      icon: <MdOutlineDeliveryDining className="icon"/>,
    },
  ];

  export default services;