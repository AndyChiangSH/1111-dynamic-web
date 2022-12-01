document.body.innerHTML = `
<div class="container">
        <h1 class="text-center my-3">公司記帳系統</h1>
        <div id="companys" class="my-3">
            <h2 class="text-center my-3">公司清單</h2>
            <div class="my-3">
                <button type="button" class="w-100 btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-company">新增公司</button>
                <div class="modal fade" id="add-company" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title">新增公司</h5>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="company-name" class="form-label">公司名稱</label>
                                    <input type="text" class="form-control" id="company-name">
                                </div>
                                <div class="mb-3">
                                    <label for="company-asset" class="form-label">初始資產</label>
                                    <input type="number" class="form-control" id="company-asset">
                                </div>
                                <div class="mb-3">
                                    <label for="company-debt" class="form-label">初始負債</label>
                                    <input type="number" class="form-control" id="company-debt">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                <button type="button" id="add-company-confirm" class="btn btn-primary" data-bs-dismiss="modal">確定</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">公司名稱</th>
                        <th scope="col">初始資產</th>
                        <th scope="col">初始負債</th>
                        <th scope="col">總收入</th>
                        <th scope="col">總支出</th>
                        <th scope="col">總利潤</th>
                        <th scope="col">帳本</th>
                    </tr>
                </thead>
                <tbody id="companys-table">
                </tbody>
            </table>
        </div>
        <div id="accounts" class="my-3">
            <h2 class="text-center my-3"><span id="company-accounts"></span> 的帳本</h2>
            <div class="d-flex justify-content-between my-3">
                <button type="button" id="back-to-companys" class="btn btn-secondary w-100 mx-2">返回公司清單</button>
                <button type="button" class="btn btn-success w-100 mx-2" data-bs-toggle="modal" data-bs-target="#add-income">新增收入</button>
                <button type="button" class="btn btn-danger w-100 mx-2" data-bs-toggle="modal" data-bs-target="#add-outcome">新增支出</button>
                <button type="button" class="btn btn-warning w-100 mx-2" data-bs-toggle="modal" data-bs-target="#add-employee">新增員工</button>
            </div>
            <div>
                <div class="modal fade" id="add-income" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title">新增收入</h5>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="income-name" class="form-label">名稱</label>
                                    <input type="text" class="form-control" id="income-name">
                                </div>
                                <div class="mb-3">
                                    <label for="income-price" class="form-label">單價</label>
                                    <input type="number" class="form-control" id="income-price">
                                </div>
                                <div class="mb-3">
                                    <label for="income-number" class="form-label">數量</label>
                                    <input type="number" class="form-control" id="income-number">
                                </div>
                                <div class="mb-3">
                                    <label for="income-date" class="form-label">紀錄日期</label>
                                    <input type="date" class="form-control" id="income-date">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                <button type="button" id="add-income-confirm" class="btn btn-primary" data-bs-dismiss="modal">確定</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="add-outcome" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title">新增支出</h5>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="outcome-name" class="form-label">名稱</label>
                                    <input type="text" class="form-control" id="outcome-name">
                                </div>
                                <div class="mb-3">
                                    <label for="outcome-price" class="form-label">單價</label>
                                    <input type="number" class="form-control" id="outcome-price">
                                </div>
                                <div class="mb-3">
                                    <label for="outcome-number" class="form-label">數量</label>
                                    <input type="number" class="form-control" id="outcome-number">
                                </div>
                                <div class="mb-3">
                                    <label for="outcome-date" class="form-label">紀錄日期</label>
                                    <input type="date" class="form-control" id="outcome-date">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                <button type="button" id="add-outcome-confirm" class="btn btn-primary" data-bs-dismiss="modal">確定</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="add-employee" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title">新增員工</h5>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="employee-name" class="form-label">姓名</label>
                                    <input type="text" class="form-control" id="employee-name">
                                </div>
                                <div class="mb-3">
                                    <label for="employee-salary" class="form-label">薪資</label>
                                    <input type="number" class="form-control" id="employee-salary">
                                </div>
                                <div class="mb-3">
                                    <label for="employee-date" class="form-label">紀錄日期</label>
                                    <input type="date" class="form-control" id="employee-date">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                <button type="button" id="add-employee-confirm" class="btn btn-primary" data-bs-dismiss="modal">確定</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">帳單類型</th>
                        <th scope="col">名稱/姓名</th>
                        <th scope="col">單價/薪資</th>
                        <th scope="col">數量</th>
                        <th scope="col">總金額</th>
                        <th scope="col">紀錄日期</th>
                    </tr>
                </thead>
                <tbody id="accounts-table">
                </tbody>
            </table>
        </div>
    </div>
`
var data = JSON.parse(localStorage.getItem("data")) || [];
// var data = [
//     {"name": "A", "asset": 111, "debt": 222, "income": 333, "outcome": 444, "accounts": [
//         {"type": "收入", "name": "aaa", "price": 100, "number": 2, "total": 200, "date": "2022/12/01"},
//         {"type": "支出", "name": "bbb", "price": 200, "number": 3, "total": 600, "date": "2022/12/02"},
//         {"type": "員工", "name": "ccc", "price": 50, "number": 1, "total": 50, "date": "2022/12/03"},
//     ]},
//     {"name": "B", "asset": 555, "debt": 666, "income": 777, "outcome": 888, "accounts": []}
// ]
var company_id = 0;

// 初始化
init();
function init() {
    document.getElementById("add-company-confirm").addEventListener("click", add_company);
    document.getElementById("back-to-companys").addEventListener("click", render_companys);
    document.getElementById("add-income-confirm").addEventListener("click", add_income);
    document.getElementById("add-outcome-confirm").addEventListener("click", add_outcome);
    document.getElementById("add-employee-confirm").addEventListener("click", add_employee);
    render_companys()
}

// 繪製公司清單
function render_companys() {
    document.getElementById("companys").style.display = 'block';    // 顯示公司清單
    document.getElementById("accounts").style.display = 'none';     // 隱藏帳本

    data.sort(sort_by("name")); // 依據名稱排序

    // console.log("data:", data);
    // 繪製表格
    let companys_table = document.getElementById("companys-table");
    companys_table.innerHTML = "";
    for(let i = 0; i < data.length; i++) {
        let node = document.createElement("tr");
        let content = "<td>" + data[i]["name"] + "</td>";
        content += "<td>" + data[i]["asset"] + "</td>";
        content += "<td>" + data[i]["debt"] + "</td>";
        content += "<td>" + data[i]["income"] + "</td>";
        content += "<td>" + data[i]["outcome"] + "</td>";
        content += "<td>" + (data[i]["income"]-data[i]["outcome"]) + "</td>";
        content += '<td><button type="button" class="btn btn-secondary" onclick="render_accounts(' + i + ')">帳本</button></td>';
        node.innerHTML = content;
        companys_table.appendChild(node);
    }
}

// 新增公司
function add_company() {
    let company_name = document.getElementById("company-name").value;
    let company_asset = document.getElementById("company-asset").value;
    let company_debt = document.getElementById("company-debt").value;

    // 公司名稱清單
    let company_names = [];
    for(let i = 0; i < data.length; i++) {
        company_names.push(data[i]["name"]);
    }

    if(company_name == "" || company_asset == "" || company_debt == "") {
        alert("輸入不能為空!");
    }
    else if (company_names.includes(company_name)) {
        alert("公司名稱不能重複!")
    }
    else {
        // 重置輸入表單
        document.getElementById("company-name").value = "";
        document.getElementById("company-asset").value = "";
        document.getElementById("company-debt").value = "";

        // 存入資料
        data.push({"name": company_name, "asset": company_asset, "debt": company_debt, "income": 0, "outcome": 0, "accounts": []});
        localStorage.setItem("data", JSON.stringify(data));

        // 重新繪製
        render_companys();
    }
}

// 排序
function sort_by(field) {
    return function(a, b) {
        return (a[field] > b[field]) - (a[field] < b[field])
    };
}

// 繪製帳本
function render_accounts(id) {
    document.getElementById("companys").style.display = 'none';     // 隱藏公司清單
    document.getElementById("accounts").style.display = 'block';    // 顯示帳本
    console.log("id:", id);
    company_id = id;
    
    data[company_id]["accounts"].sort(sort_by("date")); // 依照時間排序

    // console.log("data:", data);
    // 繪製表格
    document.getElementById("company-accounts").innerHTML = data[company_id]["name"]
    let accounts_table = document.getElementById("accounts-table");
    accounts_table.innerHTML = "";
    for (let i = 0; i < data[company_id]["accounts"].length; i++) {
        let node = document.createElement("tr");
        // 不同類型有不同顏色
        if (data[company_id]["accounts"][i]["type"] == "收入") {
            node.className = "table-success";
        }
        else if (data[company_id]["accounts"][i]["type"] == "支出") {
            node.className = "table-danger"
        }
        else if (data[company_id]["accounts"][i]["type"] == "員工") {
            node.className = "table-warning"
        }
        let content = "<td>" + data[company_id]["accounts"][i]["type"] + "</td>";
        content += "<td>" + data[company_id]["accounts"][i]["name"] + "</td>";
        content += "<td>" + data[company_id]["accounts"][i]["price"] + "</td>";
        content += "<td>" + data[company_id]["accounts"][i]["number"] + "</td>";
        content += "<td>" + data[company_id]["accounts"][i]["total"] + "</td>";
        content += "<td>" + data[company_id]["accounts"][i]["date"] + "</td>";
        node.innerHTML = content;
        accounts_table.appendChild(node);
    }
}

// 新增收入
function add_income() {
    // 讀取輸入框
    let income_name = document.getElementById("income-name").value;
    let income_price = document.getElementById("income-price").value;
    let income_number = document.getElementById("income-number").value;
    let income_date = document.getElementById("income-date").value;
    let income_total = income_price * income_number;

    if(income_name == "" || income_price == "" || income_number == "" || income_date == "") {
        alert("輸入不能為空!");
    }
    else {
        // 清空輸入框
        document.getElementById("income-name").value = "";
        document.getElementById("income-price").value = "";
        document.getElementById("income-number").value = "";
        document.getElementById("income-date").value = "";

        // 存入資料
        data[company_id]["accounts"].push({"type": "收入", "name": income_name, "price": income_price, "number": income_number, "total": income_total, "date": income_date});
        data[company_id]["income"] += income_total;
        localStorage.setItem("data", JSON.stringify(data));
    
        // 重新繪製
        render_accounts(company_id);
    }
}

// 新增支出
function add_outcome() {
    // 讀取輸入框
    let outcome_name = document.getElementById("outcome-name").value;
    let outcome_price = document.getElementById("outcome-price").value;
    let outcome_number = document.getElementById("outcome-number").value;
    let outcome_date = document.getElementById("outcome-date").value;
    let outcome_total = outcome_price * outcome_number;

    if(outcome_name == "" || outcome_price == "" || outcome_number == "" || outcome_date == "") {
        alert("輸入不能為空!");
    }
    else {
        // 清空輸入框
        document.getElementById("outcome-name").value = "";
        document.getElementById("outcome-price").value = "";
        document.getElementById("outcome-number").value = "";
        document.getElementById("outcome-date").value = "";

        // 存入資料
        data[company_id]["accounts"].push({"type": "支出", "name": outcome_name, "price": outcome_price, "number": outcome_number, "total": outcome_total, "date": outcome_date});
        data[company_id]["outcome"] += outcome_total;
        localStorage.setItem("data", JSON.stringify(data));
    
        // 重新繪製
        render_accounts(company_id);
    }
}

// 新增員工
function add_employee() {
    // 讀取輸入框
    let employee_name = document.getElementById("employee-name").value;
    let employee_salary = document.getElementById("employee-salary").value;
    let employee_number = 1;
    let employee_date = document.getElementById("employee-date").value;
    let employee_total = employee_salary * employee_number;

    if(employee_name == "" || employee_salary == "" || employee_number == "" || employee_date == "") {
        alert("輸入不能為空!");
    }
    else {
        // 清空輸入框
        document.getElementById("employee-name").value = "";
        document.getElementById("employee-salary").value = "";
        document.getElementById("employee-date").value = "";

        // 存入資料
        data[company_id]["accounts"].push({"type": "員工", "name": employee_name, "price": employee_salary, "number": employee_number, "total": employee_total, "date": employee_date});
        data[company_id]["outcome"] += employee_total;
        localStorage.setItem("data", JSON.stringify(data));
    
        // 重新繪製
        render_accounts(company_id);
    }
}

// 清除所有資料 (測試用)
function clean_data() {
    data = [];
    localStorage.setItem("data", JSON.stringify(data));
    init();
}