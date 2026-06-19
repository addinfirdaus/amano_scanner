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

    const response = await fetch(WEBAPP_URL,{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    action:"SAVE_BARCODE",
    nik:nik,
    kodeLokasi:kode
  })
});

console.log(response.url);
console.log(response.status);

const text = await response.text();

console.log(text);
alert(text);

    // const response = await fetch(
    //     "WEB_APP_URL",
    //     {
    //       method:"POST",

    //       headers:{
    //         "Content-Type":
    //         "application/json"
    //       },

    //       body:JSON.stringify({

    //         action:"SAVE_BARCODE",

    //         nik:nik,

    //         kodeLokasi:kode

    //       })

    //     }
    //   );

    // const hasil =
    //   await response.json();

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
