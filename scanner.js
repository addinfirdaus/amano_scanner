const WEBAPP_URL =
"https://script.google.com/a/macros/siantarmaju.com/s/AKfycbyJgeBI1OkH-aKmuntJ4K_bD_4XmSttHtg32J7KmRuwpAFTmegGNDq4T5tMT7dXdfI_/exec";

const nik =
new URLSearchParams(
window.location.search
).get("nik");

function onScanSuccess(decodedText){

  saveBarcode(decodedText);

}

new Html5QrcodeScanner(
  "reader",
  {
    fps:10,
    qrbox:250
  }
).render(onScanSuccess);

async function saveBarcode(kode){

  try{

    const response = await fetch(
        "WEB_APP_URL",
        {
          method:"POST",
          mode:"no-cors",

          headers:{
            "Content-Type":
            "application/json"
          },

          body:JSON.stringify({

            action:"SAVE_BARCODE",

            nik:nik,

            kodeLokasi:kode

          })

        }
      );

    const hasil =
      await response.json();

    if(hasil.status){

      alert(
        "Barcode berhasil disimpan"
      );

    }

  }
  catch(err){

    alert(err);

  }

}
