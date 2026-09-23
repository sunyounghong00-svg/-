// 선생님 전용 관리자 비밀번호 설정 (원하는 암호로 변경 가능)
const ADMIN_PASSWORD = "1234";

function startVoteSession() {
    // 비밀번호 입력 팝업
    const inputPassword = prompt("선생님 전용 관리자 암호를 입력해주세요:");

    if (inputPassword === null) {
        // 취소 누른 경우
        return;
    }

    if (inputPassword === ADMIN_PASSWORD) {
        // 암호가 일치할 때만 투표 시작 세션 실행
        if (db) {
            db.ref('session').set({
                status: 'started',
                startTime: Date.now()
            });
        } else {
            showVoteScreen();
            startLocalTimer(Date.now());
        }
        alert("투표가 시작되었습니다!");
    } else {
        alert("비밀번호가 올바르지 않습니다. 선생님만 투표를 시작할 수 있습니다.");
    }
}