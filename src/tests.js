if (window.location.href.indexOf('?test') !== -1) {
    var player = videojs("vid1");

    player.one('play', function(){

        setTimeout(function(){

            test('should record initial point', function(){
                var component = player.controlBar.ControlTimePanel.ControlTimePanelRecord;
                component.onClick();
                ok(component.times.start !== false);
            });

            test('should record final point', function(){
                var component = player.controlBar.ControlTimePanel.ControlTimePanelRecord;
                component.onClick();
                ok(component.times.end !== false);
            });

            test('should reset points', function(){
                var component = player.controlBar.ControlTimePanel.ControlTimePanelRecord;
                component.onClick();
                ok(component.times.start === false && component.times.end === false);
            });

        }, 2000);

    });
}