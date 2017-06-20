$(function () {
    App.Views.CourseStepsView = Backbone.View.extend({

        tagName: "table",

        className: "table table-striped",
        roles: null,

        addOne: function (model) {

        },
        render: function () {
            this.collection.each(this.addStep, this)

        },
        addStep: function (model) {

            this.$el.append('<tr><td><b>' + model.get('title') + '</b></td></br></br><td><textarea class = "viewDescription">' + model.get('description') + '<textarea></td></tr>')

        }

    })

})