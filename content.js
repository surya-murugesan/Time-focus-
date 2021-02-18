if (window.location.origin != "https://www.google.com") {
    swal({
        title: "Is this really important??",
        text: "If not, please focus dude! ",
        icon: "warning",
        buttons: ["I promise,its relevant", "Not really.Close & Focus bro."],
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                chrome.runtime.sendMessage({ closeThis: true });

            }
        });
    //
    // var r = confirm("Are you sure is this damn important? If not,focus dude!");
    // if (r != true) {
    //     chrome.runtime.sendMessage({ closeThis: true });
    // }
}









