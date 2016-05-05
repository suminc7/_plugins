
$('.onoff').each(function(){
   var self = this, $self = $(this);
   self.img = $(self).find('img');
   self.off = self.img.attr('src').toString();
   self.on = self.img.attr('src').replace('.png', '_on.png').toString();
   $self.mouseenter(function(){
       self.img.attr('src', self.on);
   }).mouseleave(function(){
       self.img.attr('src', self.off); 
   });
});