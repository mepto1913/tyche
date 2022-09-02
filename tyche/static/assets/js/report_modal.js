function open_report(exam_id){
    //select the modal element#

    const $form = $("#report_form");
    const $id = $("#report_exam_id");
    //setz die form action auf die examid
    //
    const action = '/report/' + exam_id;
    $form.attr('action', action);
    $id.text(exam_id)

    $('#report_modal').modal('show');
}
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
function send_report(exam_id){
    const $reason = $("#report_reason");
    const $id = $("#report_exam_id");
    const formData = new FormData();
    const csrftoken = getCookie('csrftoken');
    let headers = new Headers();
    headers.append('X-CSRFToken', csrftoken);
    formData.append("exam_id", $id.text());
    formData.append("reason", $reason.val());
    fetch('/report/',{method: "POST",
                                body: formData,
                                headers: headers});

    $reason.val("");
    $('#report_modal').modal('hide');
    create_message_toast("info", "Your report has been registered and will be reviewed");

}