function calculation() {
    var first_number = document.getElementById('inp1').value;
    var second_number = document.getElementById('inp2').value;
    var metersSm = first_number * 100;
    var smMeters = first_number / 100;

    if (document.getElementById('select_input').value == 'meters' && document.getElementById('select_output').value == 'centimeters' ) {
        document.getElementById('inp2').value = metersSm;
        console.log(metersSm)
    } else if (document.getElementById('select_input').value == 'centimeters' && document.getElementById('select_output').value == 'meters') {
        document.getElementById('inp2').value = smMeters;
    }
}