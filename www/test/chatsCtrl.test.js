describe('ChatsCtrl', function () {
    var chatsMock;
    describe('#doCallAllChats', function () {
        it('should call all the chats info', function () {
            expect(chatsMock.all);
        });
    });
    describe('#doRemoveOneChat', function () {
        it('should remove the special one', function () {
            expect(chatsMock.remove).toHaveBeenCalledWith(chat);
        });
    });
})