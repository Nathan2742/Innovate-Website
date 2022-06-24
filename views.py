from flask import render_template, Blueprint, request

views = Blueprint("views", __name__)

task_list = []


@views.route("/")
def home():
    return render_template("index.html")

@views.route("/wishlist", methods=["GET", "POST"])
def wishlist():
    if request.method == "POST":
        task = request.form.get("task-input")
        task_list.append(task)
        return render_template("wishlist.html", task_list=task_list)
    return render_template("wishlist.html")
    



@views.route("/content")
def content():
    return render_template("content.html")

@views.route("/comingsoon")
def comingsoon():
    return render_template("comingsoon.html")

@views.route("/contactme")
def contactme():
    return render_template("contactme.html")