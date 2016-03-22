describe('ChatsCtrl', function () {
    var chatsMock, chats, ctrl, scope;
    
    // load module for app
    beforeEach(module('starter'));

    beforeEach(inject(function($controller,$rootScope){        
        chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ben.png'
        }];        
        var remove = function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        }
        var all = function () {
            return chats;
        }
        chatsMock = {
            all: all,             
            remove: remove
        }        
        
        
        // chatsMock = jasmine.createSpyObj('searchService', ['all', 'remove']);
        
        scope = $rootScope.$new();                
        ctrl = $controller('ChatsCtrl',{
            '$scope': scope,
            'Chats': chatsMock
        });                
    }));

    describe('#doCallAllChats', function () {
        it('should call all the chats info', function () {
            if(chatsMock.all){
                spyOn(chatsMock, 'all');
                spyOn(chatsMock, 'remove');
                expect(scope.chats).toHaveBeenCalled();    
            }                          
        });
    });
    describe('#doRemoveOneChat', function () {
        it('should remove the special one', function () {
            // expect(chatsMock.remove).toHaveBeenCalledWith(chat);
        });
    });
})
