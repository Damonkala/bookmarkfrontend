'use strict';

var angBookmark = angular.module('angBookmark', ["ui.router"])

angBookmark.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/bookmarks")

  $stateProvider
  .state('bookmarks', {
    url: "/bookmarks",
    templateUrl: "../partials/bookmarks.html"
  })
  .state('tagslist', {
    url: "/tagslist",
    templateUrl: "../partials/tagsList.html",
    controller: "TagsListCtrl"
  })
  // .state('tag', {
  //   url: "/tag/:id",
  //   templateUrl: "../partials/tag.html",
  //   controller: "TagCtrl"
  // })
  .state('tag', {
    url: "/tag/:name",
    templateUrl: "../partials/tag.html",
    controller: "TagCtrl"
  })
})
