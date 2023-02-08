# Welcome to the Osipi Website Repo

This is the repository hosting the content of the web site for the Open Science Initiative for Perfusion Imaging (OSIPI)

If you are interested to contribute to the content, and are not familiar with GitHub, please read [this document](http://bit.ly/2JF4oRK)!

## Table of Contents

- [Welcome to the Osipi Website Repo](#welcome-to-the-osipi-website-repo)
  - [Table of Contents](#table-of-contents)
  - [Overall organization](#overall-organization)
    - [How to edit content](#how-to-edit-content)
    - [Editing using web interface](#editing-using-web-interface)
    - [How to add photo gallery](#how-to-add-photo-gallery)
  - [Building web site locally to evaluate your changes](#building-web-site-locally-to-evaluate-your-changes)
  - [Maintaining “event” pages](#maintaining-event-pages)
    - [Before the event](#before-the-event)
    - [After the event](#after-the-event)
- [Troubleshooting](#troubleshooting)

## Overall organization

To get started with modifying the OSIPI web site, first let's take a look at its overall organization in the repository.

The main top-level pages of the web site are located in the folder [pages/pages-root-folder](https://github.com/OSIPI/osipi.github.io/tree/master/pages/pages-root-folder). By opening individual pages you should be able to quickly figure out which page it is. Note that sometimes, it might be easier to look at "raw" view of the page by clicking the "Raw" button (red arrow in Fig.1).

Correspondence between the web site section titles and the pages with the content can also be established by looking at the `navigation.yml` file in the top-level [_data folder](<https://github.com/OSIPI/osipi.github.io/blob/master/_data/navigation.yml>) (note that while the address link contains the blob/master folder layers, you may not see them within GitHub and search for the top-level _data folder as described).

### How to edit content

First, identify the page that you want to edit. If not sure, ask on Slack.
You can edit content using either web interface of GitHub (easy, and recommended for small changes), or by checking out (i.e. git term for downloading a certain version of) the repository to your computer, and using git for commiting changes (more difficult, if you are not familiar with git, and is an overkill if you want to change just one page and the change is simple).

### Editing using web interface

Open the page you want to edit in GitHub. Note that you must be logged into GitHub!
Click the “pencil” button (see green arrow in Fig.1). This will open the page in edit mode (see Fig.2 below)

You will see that the documents follow certain organization:
There is a header on top of the document (orange box in Fig.2)
There is formatted text that follows the header (green box in Fig.2)
Note that the formatted text is using GitHub flavored Markdown format.

Basically, it allows you to define such items as text bullets, links, control text appearance (italics, bold) etc using simple formatting rules. Read about basics here: <https://guides.github.com/features/mastering-markdown/>.

Edit the document as needed. For the demonstration purposes, I will update Frank’s affiliation, and add a URL pointing to my home page (see below).

Once you make the change, fill out the details (you can just leave a small note, but usually the note should describe what has been changed; in this sense, the example below is not a good example, the note should instead say “Update affiliation and add web link“, or something of that kind), and choose “Create a new branch for this commit and start a pull request. Learn more about pull requests.”

Once you click “Propose file change”, you will see a new page with the Pull Request (PR), and highlights of all the changes you made. Important: you will need to click the “Create pull request” button to submit the pull request! (big red arrow in the figure below).

Once you submitted the request, all administrators of the repository will be notified, and will review your change. It will look like this for the change above: <https://github.com/OSIPI/osipi.github.io/pull/5>.

If any changes are needed, there may be additional discussion. Once your PR is merged, the changes you made will go “live” on the web site!
If you are working on your pull request, and do not want it to be merged yet, please add “WIP” (Work In Progress) to the title of the PR! If you do not have WIP in the name, your PR may be merged any moment.

### How to add photo gallery

See instructions here: <https://phlow.github.io/feeling-responsive/design/gallery/https://phlow.github.io/feeling-responsive/design/gallery/>.

Remember to:
[suggested] Resize the images to some reasonable size (modern photo capturing devices can produce pictures of excessive resolution and file size!)

Place the photos that you want to add to the images folder of the repository

Make a thumbnail of the picture (as described in the instructions linked above)

## Building web site locally to evaluate your changes

You can generate a local instance of the web site to see your changes in realtime. See this [guide](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll) for details on how to set up your environment.

To install the project you will need to install Ruby, Bundler, and Jekyll.

Bundler handles updating and installing Ruby libraries, or "gems",as well as running jekyll to serve the website locally.

Once Ruby, Bundler, and Jekyll are installed you can use the following commands.

`bundle install` will install the contents of the supplied "gemfile.lock"

`bundle exec Jekyll serve` will serve a local version of your website, by default at `http://localhost:4000`

If you get errors with your specific version of ruby, you can try updating the contents of the gemfile.lock by using:

`bundle update`

Once installed, point your browser to `http://localhost:4000`.

## Maintaining “event” pages

In order to organize information about upcoming and past events, we use “event” pages of the web site. The process of creating those is the following:

### Before the event

Add a new item to the _posts folder with the page describing the event: <https://github.com/OSIPI/osipi.github.io/tree/master/_posts>. You can follow the example of other event pages (e.g., the one for 2019 MIS to make sure your page is consistently formatted).
Make sure to set “categories” tag to “events” so this page can be categorized properly and will show up under EVENTS menu on the web site!

### After the event

If available, upload PDFs of the slides to this folder: <https://github.com/OSIPI/osipi.github.io/tree/master/assets/pdf> (reduce PDF size if you can first!)
Link PDFs to the event pages, as done in this commit.
Add pictures to the gallery as described above. To do this, you will need to upload high resolution pictures into the images folder, create thumbnail images and name then the same as high resolution, but with “-thumb” suffix (as done in this commit). Once the images are uploaded, you can link them to the events page in the “gallery” section, see example here.

# Troubleshooting

If something does not work, the first step in troubleshooting can be to build the website locally.
