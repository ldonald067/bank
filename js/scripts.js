//Buisness logic
function Account (firstName, initDeposit, newDeposit, newWithdrawal) {
  this.firstName = firstName;
  this.initDeposit = initDeposit;
  this.newDeposit = newDeposit;
  this.newWithdrawal = newWithdrawal;
}

Account.prototype.operations = function(){
  return this.initDeposit + this.newDeposit - this.newWithdrawal;
}


//User Interface
$(function() {
  $("#account-setup").submit(function(event) {
    event.preventDefault();

    var nameInput = $("#first-name").val();
    var initDeposit = parseInt($("#init-deposit").val());
    var newDeposit = parseInt($("#deposit").val());
    var newWithdrawal = parseInt($("#withdrawal").val());
    newAccount = new Account(nameInput, initDeposit, newDeposit, newWithdrawal);

    var accountTotal = newAccount.operations();
    $("h2").text("$" + accountTotal);

  });

});
