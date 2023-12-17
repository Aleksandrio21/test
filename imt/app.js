
function calculation() {
    var weight = document.getElementById('inp1').value;
    var height = document.getElementById('inp2').value;
    var res = weight / ((height * height) / 10000);
    
    var fail = '';

    if (weight == '' || height == '') {
        fail = 'Заполните все поля';
    } 
    if (fail != '') {
        document.getElementById('error').innerHTML = fail;
    } else {
        res = 'Индекс массы тела: ' + roundUp(res, 1);
        var parametrs = 'При весе - ' + weight + ' и росте - ' + height;
        document.getElementById('imt_res_parametrs').innerHTML = parametrs
        console.log(res)
        document.getElementById('imt_res').innerHTML = res;
        document.getElementById('inp1').value = '';
        document.getElementById('inp2').value = '';
    }

}

function roundUp(num, precision) {
    precision = Math.pow(10, precision);
    return Math.ceil(num * precision) / precision;
}
